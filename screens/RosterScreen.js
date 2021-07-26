import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

import Header from "../components/Header";
import Navigator from "../components/Navigator";
import StudentRoster from "../components/StudentRoster";

import AddStudentScreen from "../screens/AddStudentScreen";
import StudentInfoScreen from "../screens/StudentInfoScreen";

import plusSign from "../assets/plussign.png";

const RosterScreen = (props) => {
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
      <View style={styles.roster}>
        <StudentRoster
          students={props.studentList}
          onPress={props.studentInfoModeHandler}
        />
      </View>
      <View style={styles.footer}>
        <Navigator
          onPressRoster={props.onPressRoster}
          onPressFitness={props.onPressFitness}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  roster: {
    height: "76%",
    padding: 5,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "12%",
    flex: 1,
    zIndex: 1,
  },
});

export default RosterScreen;
