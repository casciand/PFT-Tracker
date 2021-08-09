import React, { useState } from "react";
import { View, StyleSheet, Modal } from "react-native";

import AddStaticResultScreen from "./AddStaticResultScreen";

import Header from "../components/Header";
import StudentRoster from "../components/StudentRoster";
import Timer from "../components/Timer";

import backArrow from "../assets/backarrow.png";

import Colors from "../constants/colors";

const StaticFitnessScreen = (props) => {
  const [staticResultScreenMode, setStaticResultScreenMode] = useState(false);
  const [csecs, setCsecs] = useState(6000);

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

  let timer;

  if (props.curlUpsMode) {
    timer = (
      <View style={styles.timerView}>
        <Timer ref={props.timerRef} csecs={csecs} setCsecs={setCsecs} />
      </View>
    );
  } else {
    timer = null;
  }

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
          flexedArmHangMode={props.flexedArmHangMode}
          saveStudent={props.saveStudent}
          setScore={setStaticResultHandler}
          setStaticResultScreen={setStaticResultScreenMode}
          onCancel={() => setStaticResultScreenMode(false)}
        />
        {timer}
        <View style={styles.roster}>
          <StudentRoster
            students={props.studentList}
            onPress={staticResultScreenHandler}
            curlUpsMode={props.curlUpsMode}
            pullUpsMode={props.pullUpsMode}
            pushUpsMode={props.pushUpsMode}
            sitAndReachMode={props.sitAndReachMode}
            flexedArmHangMode={props.flexedArmHangMode}
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

  timerView: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 50,
    backgroundColor: Colors.colors.background,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 5,
  },
});

export default StaticFitnessScreen;
