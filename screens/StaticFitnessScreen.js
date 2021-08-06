import React, { useState } from "react";
import { View, StyleSheet, Modal } from "react-native";

import AddStaticResultScreen from "./AddStaticResultScreen";

import Header from "../components/Header";
import StudentRoster from "../components/StudentRoster";

import backArrow from "../assets/backarrow.png";

import Colors from "../constants/colors";

const StaticFitnessScreen = (props) => {
  const [staticResultScreenMode, setStaticResultScreenMode] = useState(false);

  const setStaticResultHandler = () => {
    setStaticResultScreenMode(false);
  };

  const staticResultScreenHandler = (studentID) => {
    for (let i = 0; i < props.studentList.length; ++i) {
      if (studentID == props.studentList[i].key) {
        props.setCurrentStudent(props.studentList[i]);
        setStaticResultScreenMode(true);
        return;
      }
    }
  };

  return (
    <Modal visible={props.visible} animationType="none">
      <View style={styles.screen}>
        <Header
          title={props.title}
          imageSource={backArrow}
          onPress={props.onCancel}
        />
        <AddStaticResultScreen
          visible={staticResultScreenMode}
          student={props.student}
          title={`${props.student.lastName}, ${props.student.firstName}`}
          curlUpsMode={props.curlUpsMode}
          pullUpsMode={props.pullUpsMode}
          pushUpsMode={props.pushUpsMode}
          sitAndReachMode={props.sitAndReachMode}
          saveStudent={props.saveStudent}
          setScore={setStaticResultHandler}
          setStaticResultScreen={setStaticResultScreenMode}
          onCancel={() => setStaticResultScreenMode(false)}
        />
        <View style={styles.roster}>
          <StudentRoster
            students={props.studentList}
            onPress={staticResultScreenHandler}
            curlUpsMode={props.curlUpsMode}
            pullUpsMode={props.pullUpsMode}
            pushUpsMode={props.pushUpsMode}
            sitAndReachMode={props.sitAndReachMode}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.colors.background,
  },

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
