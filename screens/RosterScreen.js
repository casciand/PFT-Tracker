import React from "react";
import { View, Text, StyleSheet } from "react-native";

import AddStudentScreen from "../screens/AddStudentScreen";
import StudentInfoScreen from "../screens/StudentInfoScreen";

import Header from "../components/Header";
import StudentRoster from "../components/StudentRoster";

import plusSign from "../assets/plussign.png";

import Colors from "../constants/colors";
import Fonts from "../constants/fonts";

const RosterScreen = (props) => {
  let content = (
    <StudentRoster
      students={props.studentList}
      onPress={props.studentInfoModeHandler}
    />
  );

  let style = styles.roster;

  if (props.studentList.length == 0) {
    content = (
      <Text style={styles.defaultText}>
        Add students by pressing the{" "}
        <Text style={{ fontWeight: "bold" }}>+</Text> button
      </Text>
    );

    style = styles.default;
  }

  return (
    <View style={styles.screen}>
      <AddStudentScreen
        visible={props.addStudentMode}
        addStudent={props.addStudentHandler}
        onCancel={props.setAddStudentMode.bind(this, false)}
      />
      <StudentInfoScreen
        visible={props.studentInfoMode}
        student={props.currentStudent}
        onCancel={props.setStudentInfoMode.bind(this, false)}
        onDelete={props.confirmDeleteStudentHandler.bind(
          this,
          props.currentStudent
        )}
      />
      <View style={styles.header}>
        <Header
          title="Class Roster"
          imageSource={plusSign}
          onPress={props.setAddStudentMode.bind(this, true)}
        />
      </View>
      <View style={style}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.colors.background,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  roster: {
    height: "77.9%",
    padding: 5,
    top: -4.3,
  },

  default: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    backgroundColor: Colors.colors.secondary,
    borderRadius: 15,
    height: "15%",
    width: "80%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 5,
    opacity: 0.3,
    padding: 10,
    marginHorizontal: 35,
  },

  defaultText: {
    justifyContent: "center",
    alignItems: "center",
    fontFamily: Fonts.secondary,
    textAlign: "center",
    color: Colors.colors.primary,
    fontSize: 20,
    padding: 10,
  },
});

export default RosterScreen;
