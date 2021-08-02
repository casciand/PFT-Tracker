import React, { useState } from "react";
import { View, StyleSheet, Modal, Button } from "react-native";

import Header from "../components/Header";
import StudentRoster from "../components/StudentRoster";
import Stopwatch from "../components/Stopwatch";

import backArrow from "../assets/backarrow.png";
import colors from "../constants/colors";

const TimerFitnessScreen = (props) => {
  const [time, setTime] = useState(0);
  const [, setDummyValue] = useState(0);

  const forceUpdate = () => {
    setDummyValue((val) => val + 1);
  };

  const setTimerScoreHandler = (studentID) => {
    let currentTime = time;
    let currentStudent;

    for (let i = 0; i < props.studentList.length; ++i) {
      currentStudent = props.studentList[i];

      if (studentID == currentStudent.key) {
        break;
      }
    }

    if (props.mileMode) {
      currentStudent.mile = currentTime;
    } else {
      currentStudent.shuttle = currentTime;
    }

    forceUpdate();
  };

  return (
    <Modal visible={props.visible} animationType="none">
      <View style={styles.screen}>
        <Header
          title={props.title}
          imageSource={backArrow}
          onPress={props.onCancel}
        />
        <View style={styles.stopwatchView}>
          <Stopwatch time={time} setTime={setTime} />
        </View>
        <View style={styles.roster}>
          <StudentRoster
            students={props.studentList}
            onPress={setTimerScoreHandler} // change to activity specific screen
            mileMode={props.mileMode}
            shuttleMode={props.shuttleMode}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.tertiary,
  },

  name: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  button: {
    marginTop: 350,
  },

  stopwatchView: {
    alignItems: "center",
    margin: 10,
  },

  stopwatch: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 5,
    width: 220,
  },

  roster: {
    height: "84.5%",
    padding: 5,
  },
});

export default TimerFitnessScreen;
