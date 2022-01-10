import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from "react-native";
import { auth, database } from "../firebase";

import CustomButton from "../components/CustomButton";
import ValidationFunctions from "../functions/ValidationFunctions";
import FormatTimeFunctions from "../functions/FormatTimeFunctions";
import Fonts from "../constants/fonts";
import Colors from "../constants/colors";

const StudentInfoScreen = ({ route, navigation }) => {
  const [data, setData] = useState({});
  const [deleted, setDeleted] = useState(false); // bool for forcing re-renders on delete

  const { classID, id } = route.params;

  const deleteEntryHandler = (activity, entryID) => {
    const dbRef = database.ref();
    dbRef
      .child("users")
      .child(auth.currentUser.uid)
      .child("classes")
      .child(classID)
      .child("students")
      .child(id)
      .child(activity)
      .child(entryID)
      .remove();
    setDeleted((val) => !val);
  };

  const deleteStudentHandler = () => {
    navigation.goBack();
    const dbRef = database.ref();
    dbRef
      .child("users")
      .child(auth.currentUser.uid)
      .child("classes")
      .child(classID)
      .child("students")
      .child(id)
      .remove();
  };

  const formatScores = (scores, activity, min, sec, cm) => {
    let formattedScores = [];

    for (const [key, value] of Object.entries(scores)) {
      let score = value.score;

      if (min) {
        score = FormatTimeFunctions.formatTimeMinutes(score);
      } else if (sec) {
        score = `${score} s`;
      } else if (cm) {
        score = `${score} cm`;
      }

      const entry = (
        <TouchableOpacity
          style={styles.entry}
          onPress={() => {
            Alert.alert("Delete Entry?", `Date: ${value.date}, Score: ${score}`, [
              { text: "Cancel", style: "cancel", onPress: () => {} },
              {
                text: "Delete",
                style: "destructive",
                onPress: () => deleteEntryHandler(activity, key),
              },
            ]);
          }}
        >
          <Text style={styles.activity}>{value.date}</Text>
          <Text style={styles.activity}>{score}</Text>
        </TouchableOpacity>
      );

      formattedScores.push(entry);
    }

    return formattedScores;
  };

  const createInfoBlock = ({ scores, activity, min = false, sec = false, cm = false }) => {
    let contents = (
      <View style={{ padding: 10 }}>
        <Text style={styles.noEntry}>No Entries</Text>
      </View>
    );

    if (scores) {
      contents = (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 10 }}>
          {formatScores(scores, activity, min, sec, cm)}
        </ScrollView>
      );
    }

    return contents;
  };

  // get student data on page open
  useEffect(() => {
    const dbRef = database.ref();
    dbRef
      .child("users")
      .child(auth.currentUser.uid)
      .child("classes")
      .child(classID)
      .child("students")
      .child(id)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [deleted]);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.information} showsVerticalScrollIndicator={false}>
        <View style={styles.fitnessInfo}>
          <Text style={styles.infoTitle}>Fitness Scores</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.activityTitleView}>
              <Text style={styles.activityTitle}>Curl-Ups</Text>
              <Text style={styles.activityTitle}>
                Best: {ValidationFunctions.getHighestScore(data.curlUps)}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              {createInfoBlock({ scores: data.curlUps, activity: "curlUps" })}
            </View>

            <View style={styles.activityTitleView}>
              <Text style={styles.activityTitle}>Sit & Reach</Text>
              <Text style={styles.activityTitle}>
                Best:{" "}
                {ValidationFunctions.getHighestScore(data.sitAndReach) == "N/A"
                  ? "N/A"
                  : `${ValidationFunctions.getHighestScore(data.sitAndReach)} cm`}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              {createInfoBlock({ scores: data.sitAndReach, activity: "sitAndReach", cm: true })}
            </View>

            <View style={styles.activityTitleView}>
              <Text style={styles.activityTitle}>Pull-Ups</Text>
              <Text style={styles.activityTitle}>
                Best: {ValidationFunctions.getHighestScore(data.pullUps)}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              {createInfoBlock({ scores: data.pullUps, activity: "pullUps" })}
            </View>

            <View style={styles.activityTitleView}>
              <Text style={styles.activityTitle}>Push-Ups</Text>
              <Text style={styles.activityTitle}>
                Best: {ValidationFunctions.getHighestScore(data.pushUps)}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              {createInfoBlock({ scores: data.pushUps, activity: "pushUps" })}
            </View>

            <View style={styles.activityTitleView}>
              <Text style={styles.activityTitle}>Flexed Arm Hang</Text>
              <Text style={styles.activityTitle}>
                Best:{" "}
                {ValidationFunctions.getHighestScore(data.armHang) == "N/A"
                  ? "N/A"
                  : `${ValidationFunctions.getHighestScore(data.armHang)} s`}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              {createInfoBlock({ scores: data.armHang, activity: "armHang", sec: true })}
            </View>

            <View style={styles.activityTitleView}>
              <Text style={styles.activityTitle}>Mile Run</Text>
              <Text style={styles.activityTitle}>
                Best:{" "}
                {ValidationFunctions.getLowestScore(data.mile) == "N/A"
                  ? "N/A"
                  : FormatTimeFunctions.formatTimeMinutes(
                      ValidationFunctions.getLowestScore(data.mile)
                    )}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              {createInfoBlock({ scores: data.mile, activity: "mile", min: true })}
            </View>

            <View style={styles.activityTitleView}>
              <Text style={styles.activityTitle}>Shuttle Run</Text>
              <Text style={styles.activityTitle}>
                Best:{" "}
                {ValidationFunctions.getLowestScore(data.shuttle) == "N/A"
                  ? "N/A"
                  : `${ValidationFunctions.getLowestScore(data.shuttle)} s`}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              {createInfoBlock({ scores: data.shuttle, activity: "shuttle", sec: true })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.awardInfo}>
          <Text style={styles.infoTitle}>Awards</Text>
          <View style={{ ...styles.infoBlock, height: 75 }}>
            <View style={styles.awardTextView}>
              <Text style={styles.activity}>Presidential Fitness Award</Text>
              <Text style={styles.activity}>
                {ValidationFunctions.passedPresidential(data) ? "Passed" : "Has Not Passed"}
              </Text>
            </View>
            <View style={styles.awardTextView}>
              <Text style={styles.activity}>National Fitness Award</Text>
              <Text style={styles.activity}>
                {ValidationFunctions.passedNational(data) ? "Passed" : "Has Not Passed"}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Delete Student"
            onPress={() => {
              Alert.alert("Delete Student?", "All of this students' data will be lost.", [
                { text: "Cancel", style: "cancel", onPress: () => {} },
                { text: "Delete", style: "destructive", onPress: () => deleteStudentHandler() },
              ]);
            }}
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

  },

  fitnessInfo: {
    height: "72%",
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
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
  },
});

export default StudentInfoScreen;
