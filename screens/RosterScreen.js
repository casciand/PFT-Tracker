import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import uuid from "react-native-uuid";

import Header from "../components/Header";
import Navigator from "../components/Navigator";
import StudentRoster from "../components/StudentRoster";

import AddStudentScreen from "../screens/AddStudentScreen";

import plusSign from "../assets/plussign.png";

const RosterScreen = (props) => {
  const [studentList, setStudentList] = useState([]);
  const [addStudentMode, setAddStudentMode] = useState(false);

  const addStudentHandler = (studentName, studentAge, studentGender) => {
    setStudentList((currentStudents) => [
      ...currentStudents,
      {
        id: uuid.v1(),
        name: studentName,
        age: studentAge,
        gender: studentGender,
      },
    ]);

    setAddStudentMode(false);
  };

  const removeStudentHandler = (studentId) => {
    setStudentList((currentStudents) => {
      return currentStudents.filter((student) => student.id != studentId);
    });
  };

  const cancelAddStudentMode = () => {
    setAddStudentMode(false);
  };

  return (
    <View style={styles.screen}>
      <AddStudentScreen
        visible={addStudentMode}
        addStudent={addStudentHandler}
        onCancel={cancelAddStudentMode}
      />
      <View style={styles.header}>
        <Header
          title="Class Roster"
          imageSource={plusSign}
          onPress={() => setAddStudentMode(true)}
        />
      </View>
      <View style={styles.roster}>
        <StudentRoster students={studentList} />
      </View>
      <View style={styles.footer}>
        <Navigator />
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
    bottom: -5,
    width: "100%",
    height: "11%",
    flex: 1,
    zIndex: 1,
  },
});

export default RosterScreen;
