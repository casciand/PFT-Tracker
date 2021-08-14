import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";

import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

import RosterScreen from "./screens/RosterScreen";
import FitnessTestsScreen from "./screens/FitnessTestsScreen";

import ValidationFunctions from "./functions/ValidationFunctions";

import Navigator from "./components/Navigator";

export default function App() {
  const [studentList, setStudentList] = useState([]);
  const [currentStudent, setCurrentStudent] = useState();

  const [rosterMode, setRosterMode] = useState(true);
  const [addStudentMode, setAddStudentMode] = useState(false);
  const [studentInfoMode, setStudentInfoMode] = useState(false);

  // load students on initial render
  useEffect(() => {
    loadStudents();
  }, []);

  // AsyncStorage functions
  const saveStudent = async (student) => {
    try {
      await AsyncStorage.setItem(student.key, JSON.stringify(student));
    } catch (err) {
      alert(err);
    }
  };

  const deleteStudent = async () => {
    try {
      await AsyncStorage.removeItem(currentStudent.key);
    } catch (err) {
      alert(err);
    }
  };

  const loadStudents = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();

      for (let i = 0; i < keys.length; ++i) {
        const student = await AsyncStorage.getItem(keys[i]);

        if (student != null) {
          setStudentList((currentStudents) => [
            ...currentStudents,
            JSON.parse(student),
          ]);
        }
      }
    } catch (err) {
      alert(err);
    }
  };

  // event handlers
  const addStudentHandler = (student) => {
    let newStudent = {
      key: uuid.v1(),
      firstName: student.firstName,
      lastName: student.lastName,
      age: student.age,
      gender: student.gender,
      curlUps: student.curlUps,
      pullUps: student.pullUps,
      pushUps: student.pushUps,
      mile: student.mile,
      shuttle: student.shuttle,
      sitAndReach: student.sitAndReach,
      flexedArmHang: student.flexedArmHang,
      lapCount: student.lapCount,
      passedPresidential: student.passedPresidential,
      passedNational: student.passedNational,
    };

    setStudentList((currentStudents) => [...currentStudents, newStudent]);

    saveStudent(newStudent);
    setAddStudentMode(false);
  };

  const confirmDeleteStudentHandler = () => {
    Alert.alert(
      "Delete Student?",
      "This action cannot be undone. All of this student's data will be lost.",
      [
        {
          text: "Delete",
          style: "destructive",
          onPress: deleteStudentHandler,
        },
        { text: "Cancel", style: "cancel", onPress: () => {} },
      ]
    );
  };

  const deleteStudentHandler = () => {
    setStudentList((currentStudents) => {
      return currentStudents.filter((student) => student != currentStudent);
    });

    deleteStudent();
    setStudentInfoMode(false);
  };

  const updateTestStanding = () => {
    if (ValidationFunctions.passedNational(currentStudent)) {
      currentStudent.passedNational = true;
    } else {
      currentStudent.passedNational = false;
    }

    if (ValidationFunctions.passedPresidential(currentStudent)) {
      currentStudent.passedPresidential = true;
    } else {
      currentStudent.passedPresidential = false;
    }
  };

  const studentInfoModeHandler = (studentID) => {
    for (let i = 0; i < studentList.length; ++i) {
      let student = studentList[i];

      if (studentID == student.key) {
        setCurrentStudent(student);
        setStudentInfoMode(true);
        break;
      }
    }

    updateTestStanding();
    saveStudent(currentStudent);
  };

  let content = (
    <RosterScreen
      studentList={studentList}
      currentStudent={currentStudent}
      setCurrentStudent={setCurrentStudent}
      setStudentList={setStudentList}
      setAddStudentMode={setAddStudentMode}
      setStudentInfoMode={setStudentInfoMode}
      studentInfoModeHandler={studentInfoModeHandler}
      addStudentHandler={addStudentHandler}
      saveStudent={saveStudent}
      deleteStudent={deleteStudent}
      studentInfoMode={studentInfoMode}
      addStudentMode={addStudentMode}
      confirmDeleteStudentHandler={confirmDeleteStudentHandler}
      onPressRoster={() => setRosterMode(true)}
      onPressFitness={() => setRosterMode(false)}
    />
  );

  if (!rosterMode) {
    content = (
      <FitnessTestsScreen
        studentList={studentList}
        currentStudent={currentStudent}
        setCurrentStudent={setCurrentStudent}
        studentInfoModeHandler={studentInfoModeHandler}
        saveStudent={saveStudent}
        onPressRoster={() => setRosterMode(true)}
        onPressFitness={() => setRosterMode(false)}
      />
    );
  }

  return (
    <View style={styles.container}>
      {content}
      <StatusBar style="auto" />
      <View style={styles.navigator}>
        <Navigator
          onPressRoster={() => setRosterMode(true)}
          onPressFitness={() => setRosterMode(false)}
          rosterMode={rosterMode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  navigator: {
    height: "10%",
    width: "100%",
    bottom: 0,
    position: "absolute",
  },
});
