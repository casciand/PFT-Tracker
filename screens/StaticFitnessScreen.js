import React, { useState } from "react";
import { View, StyleSheet, Modal } from "react-native";

import Header from "../components/Header";
import StudentRoster from "../components/StudentRoster";

import AddStaticResultScreen from "./AddStaticResultScreen";

import backArrow from "../assets/backarrow.png";

const StaticFitnessScreen = (props) => {
  const [staticResultScreenMode, setStaticResultScreenMode] = useState(false);

  const setStaticResultHandler = () => {
    setStaticResultScreenMode(false);
  };

  const staticResultScreenHandler = (studentID) => {
    for (let i = 0; i < props.studentList.length; ++i) {
      if (studentID == props.studentList[i].key) {
        props.setCurrentStudent.bind(this, props.studentList[i]);
        setStaticResultScreenMode(true);
        props.setCurrentStudent(props.studentList[i]);
        return;
      }
    }
  };

  return (
    <Modal visible={props.visible} animationType="none">
      <View>
        <Header
          title={props.title}
          imageSource={backArrow}
          onPress={props.onCancel}
        />
      </View>
      <AddStaticResultScreen
        visible={staticResultScreenMode}
        student={props.student}
        title={`${props.student.lastName}, ${props.student.firstName}`}
        curlUpsMode={props.curlUpsMode}
        pullUpsMode={props.pullUpsMode}
        sitAndReachMode={props.sitAndReachMode}
        saveStudent={props.saveStudent}
        setScore={setStaticResultHandler}
        setStaticResultScreen={setStaticResultScreenMode}
        onCancel={() => setStaticResultScreenMode(false)}
      />
      <View style={styles.roster}>
        <StudentRoster
          students={props.studentList}
          onPress={staticResultScreenHandler} // change to activity specific screen
          curlUpsMode={props.curlUpsMode}
          pullUpsMode={props.pullUpsMode}
          sitAndReachMode={props.sitAndReachMode}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  name: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  button: {
    marginTop: 350,
  },

  roster: {
    height: "84.5%",
    padding: 5,
  },
});

export default StaticFitnessScreen;
