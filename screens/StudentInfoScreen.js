import React from "react";
import { View, Text, StyleSheet, Modal, Button } from "react-native";

import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

import backArrow from "../assets/backarrow.png";
import Fonts from "../constants/fonts";
import Colors from "../constants/colors";

const StudentInfoScreen = (props) => {
  const formatTime = (time) => {
    let minutes = `0${Math.floor(time / 60)}`.slice(-2);
    let seconds = `0${time % 60}`.slice(-2);

    return `${minutes}:${seconds}`;
  };

  let curlUps = props.student.curlUps ? props.student.curlUps : "Incomplete";
  let pullUps = props.student.pullUps ? props.student.pullUps : "Incomplete";
  let mile = props.student.mile ? formatTime(props.student.mile) : "Incomplete";
  let shuttle = props.student.shuttle
    ? formatTime(props.student.shuttle)
    : "Incomplete";
  let sitAndReach = props.student.sitAndReach
    ? props.student.sitAndReach + " cm"
    : "Incomplete";
  let passedPresidential = props.student.passedPresidential
    ? "Passed"
    : "Has Not Passed";
  let passedNational = props.student.passedNational
    ? "Passed"
    : "Has Not Passed";

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <View style={styles.header}>
          <Header
            style={styles.studentName}
            title={`${props.student.lastName}, ${props.student.firstName}`}
            imageSource={backArrow}
            onPress={props.onCancel}
          />
        </View>
        <View style={styles.informaion}>
          <View style={styles.fitnessInfo}>
            <Text style={styles.infoTitle}>Fitness Scores</Text>
            <View style={styles.infoBlock}>
              <View style={styles.test}>
                <Text style={styles.testText}>Curl-Ups</Text>
                <Text style={styles.testText}>{curlUps}</Text>
              </View>
              <View style={styles.test}>
                <Text style={styles.testText}>Pull-Ups</Text>
                <Text style={styles.testText}>{pullUps}</Text>
              </View>
              <View style={styles.test}>
                <Text style={styles.testText}>Mile Run</Text>
                <Text style={styles.testText}>{mile}</Text>
              </View>
              <View style={styles.test}>
                <Text style={styles.testText}>Shuttle Run</Text>
                <Text style={styles.testText}>{shuttle}</Text>
              </View>
              <View style={styles.test}>
                <Text style={styles.testText}>Sit & Reach</Text>
                <Text style={styles.testText}>{sitAndReach}</Text>
              </View>
            </View>
          </View>
          <View style={styles.awardInfo}>
            <Text style={styles.infoTitle}>Awards</Text>
            <View style={styles.infoBlock}>
              <View style={styles.test}>
                <Text style={styles.testText}>Presidential Fitness Award</Text>
                <Text style={styles.testText}>{passedPresidential}</Text>
              </View>
              <View style={styles.test}>
                <Text style={styles.testText}>National Fitness Award</Text>
                <Text style={styles.testText}>{passedNational}</Text>
              </View>
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
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.shades.secondary,
  },

  header: {
    zIndex: 4,
  },

  studentName: {
    fontSize: 20,
  },

  infoTitle: {
    fontFamily: Fonts.primary,
    fontSize: 20,
    color: "white",
    textAlign: "left",
    marginVertical: 5,
    padding: 5,
  },

  infoBlock: {
    backgroundColor: Colors.colors.primary,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
  },

  fitnessInfo: {
    height: "100%",
    padding: 5,
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: Colors.shades.secondary,
  },

  awardInfo: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
    position: "absolute",
    marginTop: 270,
    padding: 5,
    paddingHorizontal: 10,
    width: "100%",
    height: "100%",
    backgroundColor: Colors.shades.tertiary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    zIndex: 2,
  },

  test: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },

  testText: {
    fontSize: 12,
    fontFamily: Fonts.secondary,
    color: "white",
  },

  buttonContainer: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
    position: "absolute",
    bottom: 85,
    width: "100%",
    backgroundColor: Colors.colors.background,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: "row",
    zIndex: 3,
  },

  button: {
    width: "80%",
    fontSize: 16,
  },
});

export default StudentInfoScreen;
