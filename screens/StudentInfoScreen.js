import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from "react-native";
import { auth, database } from "../firebase";

import ActivityCard from "../components/ActivityCard";
import CustomButton from "../components/CustomButton";
import vf from "../functions/ValidationFunctions";
import ft from "../functions/FormatTimeFunctions";
import fonts from "../constants/fonts";
import colors from "../constants/colors";

const StudentInfoScreen = ({ route, navigation }) => {
  const [data, setData] = useState(null);
  const [deleted, setDeleted] = useState(false); // bool for forcing re-renders on delete

  const { classID, id } = route.params;

  // update data when entries are deleted
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

  const formatScores = ({ scores, activity, min = false, sec = false, cm = false }) => {
    if (!scores) {
      return <Text style={styles.noEntry}>No entries.</Text>;
    }

    let formattedScores = [];

    for (const [key, value] of Object.entries(scores)) {
      let score = value.score;

      if (min) {
        score = ft.formatTimeMinutes(score);
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

  if (!data) {
    return null;
  } else {
    return (
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={styles.information} showsVerticalScrollIndicator={false}>
          <Text style={styles.header}>
            {data.firstName}
            {data.firstName.slice(-1) == "s" ? "'" : "'s"} Scores
          </Text>
          <Text style={styles.subtitle}>
            {data.isMale ? "Boy" : "Girl"}, {data.age}
          </Text>
          <ActivityCard
            title="Curl-Ups"
            best={vf.getHighestScore(data.curlUps)}
            scores={formatScores({ scores: data.curlUps, activity: "curlUps" })}
            national={vf.getThreshold("national", "curlUps", data)}
            presidential={vf.getThreshold("presidential", "curlUps", data)}
          />
          <ActivityCard
            title="Sit & Reach"
            best={vf.getHighestScore(data.sitAndReach)}
            scores={formatScores({ scores: data.sitAndReach, activity: "sitAndReach", cm: true })}
            national={vf.getThreshold("national", "sitAndReach", data)}
            presidential={vf.getThreshold("presidential", "sitAndReach", data)}
          />
          <ActivityCard
            title="Push-Ups"
            best={vf.getHighestScore(data.pushUps)}
            scores={formatScores({ scores: data.pushUps, activity: "pushUps" })}
            national={vf.getThreshold("national", "pushUps", data)}
            presidential={vf.getThreshold("presidential", "pushUps", data)}
          />
          <ActivityCard
            title="Pull-Ups"
            best={vf.getHighestScore(data.pullUps)}
            scores={formatScores({ scores: data.pullUps, activity: "pullUps" })}
            national={vf.getThreshold("national", "pullUps", data)}
            presidential={vf.getThreshold("presidential", "pullUps", data)}
          />
          <ActivityCard
            title="Arm Hang"
            best={vf.getHighestScore(data.armHang)}
            scores={formatScores({ scores: data.armHang, activity: "armHang", sec: true })}
            national={vf.getThreshold("national", "armHang", data)}
            presidential="N/A"
          />
          <ActivityCard
            title="Mile Run"
            best={vf.getLowestScore(data.mile)}
            scores={formatScores({ scores: data.mile, activity: "mile", min: true })}
            national={vf.getThreshold("national", "mile", data)}
            presidential={vf.getThreshold("presidential", "mile", data)}
          />
          <ActivityCard
            title="Shuttle Run"
            best={vf.getLowestScore(data.shuttle)}
            scores={formatScores({ scores: data.shuttle, activity: "shuttle", sec: true })}
            national={vf.getThreshold("national", "shuttle", data)}
            presidential={vf.getThreshold("presidential", "shuttle", data)}
          />
          <Text style={styles.header}>
            {data.firstName}
            {data.firstName.slice(-1) == "s" ? "'" : "'s"} Awards
          </Text>
          <View style={styles.awardCard}>
            <View style={styles.awardInfo}>
              <View style={styles.awardTextView}>
                <Text style={styles.activity}>Presidential</Text>
                <Text style={styles.activity}>
                  {vf.achievedAward("presidential", data) ? "Passed" : "Has Not Passed"}
                </Text>
              </View>
              <View style={styles.awardTextView}>
                <Text style={styles.activity}>National</Text>
                <Text style={styles.activity}>
                  {vf.achievedAward("national", data) ? "Passed" : "Has Not Passed"}
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
  }
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
    fontFamily: fonts.secondary,
    color: "white",
  },

  noEntry: {
    fontSize: 12,
    textAlign: "center",
    fontFamily: fonts.secondary,
    color: "white",
  },

  information: {
    alignItems: "center",
  },

  awardInfo: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    borderWidth: 1,
    marginVertical: 10,
    height: 75,
    justifyContent: "center",
  },

  awardCard: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5,
    padding: 5,
    paddingHorizontal: 10,
    margin: 20,
    width: "90%",
    backgroundColor: colors.secondary,
    borderRadius: 15,
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

  header: {
    fontFamily: fonts.primary,
    fontSize: 30,
    color: colors.primary,
    marginTop: 15,
    textAlign: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
  },

  subtitle: {
    fontFamily: fonts.secondary,
    fontSize: 16,
    color: colors.primary,
    marginVertical: 5,
    textAlign: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
  },
});

export default StudentInfoScreen;
