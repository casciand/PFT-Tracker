import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AddStudentScreen from "../screens/AddStudentScreen";
import StudentInfoScreen from "../screens/StudentInfoScreen";

import Header from "../components/Header";
import StudentRoster from "../components/StudentRoster";

import plusSign from "../assets/plussign.png";
import rosterArt from "../assets/rosterback.png";

const RosterScreen = (props) => {
  let content = props.currentStudent ? (
    <StudentInfoScreen
      visible={props.studentInfoMode}
      studentList={props.studentList}
      student={props.currentStudent}
      setStudentList={props.setStudentList}
      setCurrentStudent={props.setCurrentStudent}
      saveStudent={props.saveStudent}
      onCancel={props.setStudentInfoMode.bind(this, false)}
      onDelete={props.confirmDeleteStudentHandler.bind(
        this,
        props.currentStudent
      )}
    />
  ) : null;

  return (
    <View style={styles.screen}>
      <AddStudentScreen
        visible={props.addStudentMode}
        addStudent={props.addStudentHandler}
        onCancel={props.setAddStudentMode.bind(this, false)}
      />
      {content}
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
      <View style={{ alignItems: "center", zIndex: -1 }}>
        <Image source={rosterArt} style={styles.backgroundImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },

  backgroundImage: {
    position: "absolute",
    bottom: 40,
    height: 400,
    width: 400,
    opacity: 0.4,
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
});

export default RosterScreen;
