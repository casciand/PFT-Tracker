import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Modal } from "react-native";

import EditStudentScreen from "./EditStudentScreen";

import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

import ValidationFunctions from "../functions/ValidationFunctions";
import FormatTimeFunctions from "../functions/FormatTimeFunctions";

import Fonts from "../constants/fonts";
import Colors from "../constants/colors";

import backArrow from "../assets/backarrow.png";

const StudentInfoScreen = ({ student, ...props }) => {
  const [editStudentMode, setEditStudentMode] = useState(false);

  const formatScores = (scores, min, sec, cm) => {
    let formattedScores = [];

    for (let i = 0; i < scores.length; ++i) {
      let score = scores[i].value;

      if (min) {
        score = FormatTimeFunctions.formatTimeMinutes(score * 100);
      } else if (sec) {
        score = score + " s";
      } else if (cm) {
        score = score + " cm";
      }

      const entry = (
        <View style={styles.entry}>
          <Text style={styles.activity}>{scores[i].date}</Text>
          <Text style={styles.activity}>{score}</Text>
        </View>
      );

      formattedScores.push(entry);
    }

    return formattedScores;
  };

  const createInfoBlock = (scores, min = false, sec = false, cm = false) => {
    let contents = (
      <View style={{ padding: 10 }}>
        <Text style={styles.noEntry}>No Entries</Text>
      </View>
    );

    if (scores.length != 0) {
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

  const getBestStatic = (scores, cm = false, sec = false) => {
    if (scores.length == 0) {
      return "N/A";
    }

    let best = parseFloat(scores[0].value);

    for (let i = 0; i < scores.length; ++i) {
      if (parseFloat(scores[i].value) > best) {
        best = parseFloat(scores[i].value);
      }
    }

    if (cm) {
      return best + " cm";
    } else if (sec) {
      return best + " s";
    } else {
      return best;
    }
  };

  const getBestTimer = (scores, minutes = false) => {
    if (scores.length == 0) {
      return "N/A";
    }

    let best = parseFloat(scores[0].value);

    for (let i = 0; i < scores.length; ++i) {
      if (parseFloat(scores[i].value) < best) {
        best = parseFloat(scores[i].value);
      }
    }

    if (minutes) {
      return FormatTimeFunctions.formatTimeMinutes(best * 100);
    }

    return best + " s";
  };

  const removeEmptyEntries = () => {
    student.curlUps = student.curlUps.filter((entry) => !isNaN(entry.value));
    student.sitAndReach = student.sitAndReach.filter(
      (entry) => !isNaN(entry.value)
    );
    student.pullUps = student.pullUps.filter((entry) => !isNaN(entry.value));
    student.pushUps = student.pushUps.filter((entry) => !isNaN(entry.value));
    student.flexedArmHang = student.flexedArmHang.filter(
      (entry) => !isNaN(entry.value)
    );
    student.mile = student.mile.filter((entry) => !isNaN(entry.value));
    student.shuttle = student.shuttle.filter((entry) => !isNaN(entry.value));
  };

  const updateTestStanding = () => {
    if (ValidationFunctions.passedNational(student)) {
      student.passedNational = true;
    } else {
      student.passedNational = false;
    }

    if (ValidationFunctions.passedPresidential(student)) {
      student.passedPresidential = true;
    } else {
      student.passedPresidential = false;
    }
  };

  const closeEditStudentScreenHandler = () => {
    removeEmptyEntries();
    updateTestStanding();

    props.saveStudent(student);
    setEditStudentMode(false);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <EditStudentScreen
        visible={editStudentMode}
        student={student}
        onCancel={closeEditStudentScreenHandler}
      />
      <View style={styles.screen}>
        <Header
          style={{ fontSize: 20 }}
          title={`${student.lastName}, ${student.firstName}`}
          imageSource={backArrow}
          onPress={props.onCancel}
        />
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
                  Best: {getBestStatic(student.curlUps)}
                </Text>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(student.curlUps)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Sit & Reach</Text>
                <Text style={styles.activityTitle}>
                  Best: {getBestStatic(student.sitAndReach, true, false)}
                </Text>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(student.sitAndReach, false, false, true)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Pull-Ups</Text>
                <Text style={styles.activityTitle}>
                  Best: {getBestStatic(student.pullUps)}
                </Text>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(student.pullUps)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Push-Ups</Text>
                <Text style={styles.activityTitle}>
                  Best: {getBestStatic(student.pushUps)}
                </Text>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(student.pushUps)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Flexed Arm Hang</Text>
                <Text style={styles.activityTitle}>
                  Best: {getBestTimer(student.flexedArmHang)}
                </Text>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(student.flexedArmHang, false, true, false)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Mile Run</Text>
                <Text style={styles.activityTitle}>
                  Best: {getBestTimer(student.mile, true)}
                </Text>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(student.mile, true, false, false)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Shuttle Run</Text>
                <Text style={styles.activityTitle}>
                  Best: {getBestTimer(student.shuttle)}
                </Text>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(student.shuttle, false, true, false)}
              </View>
            </ScrollView>
          </View>
          <View style={styles.awardInfo}>
            <Text style={styles.infoTitle}>Awards</Text>
            <View style={{ ...styles.infoBlock, height: 75 }}>
              <View style={styles.awardTextView}>
                <Text style={styles.activity}>Presidential Fitness Award</Text>
                <Text style={styles.activity}>
                  {student.passedPresidential ? "Passed" : "Has Not Passed"}
                </Text>
              </View>
              <View style={styles.awardTextView}>
                <Text style={styles.activity}>National Fitness Award</Text>
                <Text style={styles.activity}>
                  {student.passedNational ? "Passed" : "Has Not Passed"}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              textStyle={styles.button}
              title="Edit Student"
              onPress={() => setEditStudentMode(true)}
            />
            <CustomButton
              textStyle={styles.button}
              title="Delete Student"
              color="red"
              onPress={props.onDelete}
            />
          </View>
        </ScrollView>
      </View>
    </Modal>
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
