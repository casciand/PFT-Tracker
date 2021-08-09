import React from "react";
import { View, Text, StyleSheet, ScrollView, Modal } from "react-native";

import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

import backArrow from "../assets/backarrow.png";

import Fonts from "../constants/fonts";
import Colors from "../constants/colors";

const StudentInfoScreen = ({ student, ...props }) => {
  const formatMileTime = (time) => {
    const csecs = time * 100;

    const msecs = `0${csecs % 100}`.slice(-2);
    const seconds = `0${Math.floor(csecs / 100) % 60}`.slice(-2);
    const minutes = `0${Math.floor(csecs / 100 / 60)}`.slice(-2);

    return `${minutes}:${seconds}.${msecs}`;
  };

  const formatScores = (scores, min, sec, cm) => {
    let formattedScores = [];

    for (let i = 0; i < scores.length; ++i) {
      let score = scores[i][1];

      if (min) {
        score = formatMileTime(score);
      } else if (sec) {
        score = score + " s";
      } else if (cm) {
        score = score + " cm";
      }

      const entry = (
        <View style={styles.entry}>
          <Text style={styles.testText}>{scores[i][0]}</Text>
          <Text style={styles.testText}>{score}</Text>
        </View>
      );

      formattedScores.push(entry);
    }

    return formattedScores;
  };

  const createInfoBlock = (scores, min = false, sec = false, cm = false) => {
    let contents = (
      <View style={styles.test}>
        <Text style={styles.noEntry}>No Entries</Text>
      </View>
    );

    if (scores.length != 0) {
      contents = (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.test}
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

    let best = scores[0][1];

    for (let i = 0; i < scores.length; ++i) {
      if (scores[i][1] > best) {
        best = scores[i][1];
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

    let best = scores[0][1];

    for (let i = 0; i < scores.length; ++i) {
      if (scores[i][1] < best) {
        best = scores[i][1];
      }
    }

    if (minutes) {
      return formatMileTime(best);
    }

    return best + " s";
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <Header
          style={styles.studentName}
          title={`${student.lastName}, ${student.firstName}`}
          imageSource={backArrow}
          onPress={props.onCancel}
        />
        <ScrollView contentContainerStyle={styles.information}>
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
                <Text style={styles.testText}>Presidential Fitness Award</Text>
                <Text style={styles.testText}>
                  {student.passedPresidential ? "Passed" : "Has Not Passed"}
                </Text>
              </View>
              <View style={styles.awardTextView}>
                <Text style={styles.testText}>National Fitness Award</Text>
                <Text style={styles.testText}>
                  {student.passedNational ? "Passed" : "Has Not Passed"}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              textStyle={styles.button}
              title="Edit Student"
              onPress={() => {}}
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
    height: "100%",
    backgroundColor: Colors.colors.backgroundColor,
  },

  studentName: {
    fontSize: 20,
  },

  entry: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 5,
  },

  information: {
    justifyContent: "center",
    alignItems: "center",
    height: "150%",
    marginVertical: 10,
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

  test: {
    width: "100%",
    padding: 10,
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

  testText: {
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

  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
  },

  button: {
    width: "100%",
    fontSize: 16,
  },
});

export default StudentInfoScreen;
