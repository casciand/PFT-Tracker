import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import uuid from "react-native-uuid";

import Header from "../components/Header";
import Navigator from "../components/Navigator";
import StudentRoster from "../components/StudentRoster";

import AddStudentScreen from "../screens/AddStudentScreen";
import StudentInfoScreen from "../screens/StudentInfoScreen";

import plusSign from "../assets/plussign.png";

const defaultStudent = { key: "", name: "", age: "", gender: "" };

const RosterScreen = (props) => {
  const [studentList, setStudentList] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(defaultStudent);

  const [addStudentMode, setAddStudentMode] = useState(false);
  const [studentInfoMode, setStudentInfoMode] = useState(true);

  const addStudentHandler = (studentName, studentAge, studentGender) => {
    setStudentList((currentStudents) => [
      ...currentStudents,
      {
        key: uuid.v1(),
        name: studentName,
        age: studentAge,
        gender: studentGender,
      },
    ]);
    console.log(studentList);
    setAddStudentMode(false);
  };

  // const removeStudentHandler = (studentId) => {
  //   setStudentList((currentStudents) => {
  //     return currentStudents.filter((student) => student.id != studentId);
  //   });
  // };

  const studentInfoModeHandler = (studentID) => {
    console.log(studentList);
    for (let i = 0; i < studentList.length; ++i) {
      if (studentID == studentList[i].key) {
        setCurrentStudent(studentList[i]);
        setStudentInfoMode(true);
        return;
      }
    }
  };

  const cancelAddStudentMode = () => {
    setAddStudentMode(false);
  };

  const cancelStudentInfoMode = () => {
    setStudentInfoMode(false);
    setCurrentStudent(defaultStudent);
  };

  return (
    <View style={styles.screen}>
      <AddStudentScreen
        visible={addStudentMode}
        addStudent={addStudentHandler}
        onCancel={cancelAddStudentMode}
      />
      <StudentInfoScreen
        visible={studentInfoMode}
        onCancel={cancelStudentInfoMode}
        student={currentStudent}
      />
      <View style={styles.header}>
        <Header
          title="Class Roster"
          imageSource={plusSign}
          onPress={() => setAddStudentMode(true)}
        />
      </View>
      <View style={styles.roster}>
        <StudentRoster
          students={studentList}
          onPress={studentInfoModeHandler}
        />
      </View>
      <View style={styles.footer}>
        <Navigator onPressRoster={() => {}} onPressFitness={() => {}} />
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
