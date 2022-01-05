import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/core';
import { auth, database } from "../firebase";

import CustomButton from "../components/CustomButton";
import ValidationFunctions from "../functions/ValidationFunctions";
import FormatTimeFunctions from "../functions/FormatTimeFunctions";
import Fonts from "../constants/fonts";
import Colors from "../constants/colors";

const StudentInfoScreen = ({ route }) => {
  const [data, setData] = useState({});

  const navigation = useNavigation();
  const { id } = route.params;

  const formatScores = (scores, min, sec, cm) => {
    let formattedScores = [];

    for (const [, value] of Object.entries(scores)) {
      let score = value.score;

      if (min) {
        score = FormatTimeFunctions.formatTimeMinutes(score * 100);
      } else if (sec) {
        score = `${score} s`;
      } else if (cm) {
        score = `${score} cm`;
      }

      const entry = (
        <View style={styles.entry}>
          <Text style={styles.activity}>{value.date}</Text>
          <Text style={styles.activity}>{score}</Text>
        </View>
      );

      formattedScores.push(entry);
    }

    return formattedScores;
  };

  const createInfoBlock = (scores, min=false, sec=false, cm=false) => {
    let contents = (
      <View style={{ padding: 10 }}>
        <Text style={styles.noEntry}>No Entries</Text>
      </View>
    );

    if (scores) {
      contents = (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 10 }}
        >
          {formatScores(scores, min, sec, cm)}
        </ScrollView>
      );
    }

    return contents;
  };

  const getBestStatic = (scores, cm=false) => {
    if (!scores) {
      return "N/A";
    }

    let best = scores[Object.keys(scores)[0]].score;

    for (const [, value] of Object.entries(scores)) {
      if (value.score > best) {
        best = value.score;
      }
    }

    if (cm) {
      best += " cm";
    }

    return parseFloat(best);
  };

  const getBestTimer = (scores, minutes=false) => {
    if (!scores) {
      return "N/A";
    }

    let best = scores[Object.keys(scores)[0]].score;

    for (const [, value] of Object.entries(scores)) {
      if (value.score < best) {
        best = value.score;
      }
    }

    if (minutes) {
      return FormatTimeFunctions.formatTimeMinutes(best * 100);
    } else {
      return `${best} s`;
    }
  };

  // const removeEmptyEntries = () => {
  //   student.curlUps = student.curlUps.filter((entry) => !isNaN(entry.value));
  //   student.sitAndReach = student.sitAndReach.filter(
  //     (entry) => !isNaN(entry.value)
  //   );
  //   student.pullUps = student.pullUps.filter((entry) => !isNaN(entry.value));
  //   student.pushUps = student.pushUps.filter((entry) => !isNaN(entry.value));
  //   student.flexedArmHang = student.flexedArmHang.filter(
  //     (entry) => !isNaN(entry.value)
  //   );
  //   student.mile = student.mile.filter((entry) => !isNaN(entry.value));
  //   student.shuttle = student.shuttle.filter((entry) => !isNaN(entry.value));
  // };

  const updateTestStanding = () => {
    let national = ValidationFunctions.passedNational(data)
    let presidential = ValidationFunctions.passedPresidential(data);

    database.ref('users/' + auth.currentUser.uid + "/students/" + id).set({
      passedNational: national,
      passedPresidential: presidential
    });
  };

  const deleteStudentHandler = () => {
    navigation.goBack();
  };
  
  // get student data on initial render
  useEffect(() => {
    updateTestStanding();

    const dbRef = database.ref();
    dbRef.child("users").child(auth.currentUser.uid).child("students").child(id).get().then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [])

  return (
      <View style={styles.screen}>
        <ScrollView
          contentContainerStyle={styles.information}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.fitnessInfo}>
            <Text style={styles.infoTitle}>Fitness Scores</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Curl-Ups</Text>
                <Text style={styles.activityTitle}>
                  Best: {getBestStatic(data.curlUps)}
                </Text>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(data.curlUps)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Sit & Reach</Text>
                <Text style={styles.activityTitle}>
                  Best: {getBestStatic(data.sitAndReach, true)}
                </Text>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(data.sitAndReach, false, false, true)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Pull-Ups</Text>
                <Text style={styles.activityTitle}>
                  Best: {getBestStatic(data.pullUps)}
                </Text>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(data.pullUps)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Push-Ups</Text>
                <Text style={styles.activityTitle}>
                  Best: {getBestStatic(data.pushUps)}
                </Text>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(data.pushUps)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Flexed Arm Hang</Text>
                <Text style={styles.activityTitle}>
                  Best: {getBestTimer(data.flexedArmHang)}
                </Text>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(data.flexedArmHang, false, true, false)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Mile Run</Text>
                <Text style={styles.activityTitle}>
                  Best: {getBestTimer(data.mile, true)}
                </Text>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(data.mile, true, false, false)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Shuttle Run</Text>
                <Text style={styles.activityTitle}>
                  Best: {getBestTimer(data.shuttle)}
                </Text>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(data.shuttle, false, true, false)}
              </View>
            </ScrollView>
          </View>
          <View style={styles.awardInfo}>
            <Text style={styles.infoTitle}>Awards</Text>
            <View style={{ ...styles.infoBlock, height: 75 }}>
              <View style={styles.awardTextView}>
                <Text style={styles.activity}>Presidential Fitness Award</Text>
                <Text style={styles.activity}>
                  {data.passedPresidential ? "Passed" : "Has Not Passed"}
                </Text>
              </View>
              <View style={styles.awardTextView}>
                <Text style={styles.activity}>National Fitness Award</Text>
                <Text style={styles.activity}>
                  {data.passedNational ? "Passed" : "Has Not Passed"}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              textStyle={styles.button}
              title="Edit Student"
              onPress={() => navigation.navigate("EditStudent")}
            />
            <CustomButton
              textStyle={styles.button}
              title="Delete Student"
              color="red"
              onPress={deleteStudentHandler}
            />
          </View>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },

  entry: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 5,
  },

  activity: {
    fontSize: 12,
    fontFamily: Fonts.secondary,
    color: "white",
  },

  noEntry: {
    fontSize: 12,
    textAlign: "center",
    fontFamily: Fonts.secondary,
    color: "white",
  },

  information: {
    justifyContent: "center",
    alignItems: "center",
    height: "150%",
    marginVertical: 10,
  },

  fitnessInfo: {
    height: "60%",
    width: "90%",
    backgroundColor: Colors.shades.secondary,
    borderRadius: 15,
    borderWidth: 1,
    padding: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5,
  },

  infoTitle: {
    fontFamily: Fonts.primary,
    fontSize: 20,
    color: "white",
    textAlign: "left",
    marginVertical: 5,
    padding: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
  },

  activityTitleView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  activityTitle: {
    fontFamily: Fonts.secondary,
    fontSize: 16,
    fontStyle: "italic",
    color: "white",
    textAlign: "left",
    marginVertical: 5,
    padding: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
  },

  infoBlock: {
    backgroundColor: Colors.colors.primary,
    borderRadius: 15,
    borderWidth: 1,
    marginVertical: 10,
    height: 90,
    justifyContent: "center",
  },

  awardInfo: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5,
    padding: 5,
    paddingHorizontal: 10,
    margin: 20,
    width: "90%",
    height: "18%",
    backgroundColor: Colors.shades.secondary,
    borderRadius: 15,
    borderWidth: 1,
  },

  awardTextView: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
  },

  button: {
    fontSize: 16,
  },
});

export default StudentInfoScreen;
