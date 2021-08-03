import React, { useState } from "react";
import { View, StyleSheet, Modal, Button } from "react-native";

import Header from "../components/Header";
import StudentRoster from "../components/StudentRoster";
import Stopwatch from "../components/Stopwatch";

import backArrow from "../assets/backarrow.png";
import Colors from "../constants/colors";

const TimerFitnessScreen = (props) => {
  const [csecs, setCsecs] = useState(0);
  const [, setDummyValue] = useState(0);

  const formatMileTime = () => {
    const centisecs = `0${csecs % 100}`.slice(-2);
    const seconds = `0${Math.floor(csecs / 100) % 60}`.slice(-2);
    const minutes = `0${Math.floor(csecs / 100 / 60)}`.slice(-2);

    return `${minutes}:${seconds}.${centisecs}`;
  };

  const formatShuttleTime = () => {
    const centisecs = `0${csecs % 100}`.slice(-2);
    const seconds = `0${Math.floor(csecs / 100) % 60}`.slice(-2);

    return `${seconds}.${centisecs}`;
  };

  const forceUpdate = () => {
    setDummyValue((val) => val + 1);
  };

  const setTimerScoreHandler = (studentID) => {
    if (csecs == 0) {
      return;
    }

    const currentSeconds = csecs / 100;
    let currentStudent;

    for (let i = 0; i < props.studentList.length; ++i) {
      currentStudent = props.studentList[i];

      if (studentID == currentStudent.key) {
        break;
      }
    }

    if (props.mileMode) {
      currentStudent.mile = currentSeconds;
    } else {
      currentStudent.shuttle = currentSeconds;
    }

    forceUpdate();
  };

  let timeFormat = formatMileTime;

  if (props.shuttleMode) {
    timeFormat = formatShuttleTime;
  }

  return (
    <Modal visible={props.visible} animationType="none">
      <View style={styles.screen}>
        <Header
          title={props.title}
          imageSource={backArrow}
          onPress={props.onCancel}
        />
        <View style={styles.stopwatchView}>
          <Stopwatch format={timeFormat} setCsecs={setCsecs} />
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
    backgroundColor: Colors.colors.background,
  },

  stopwatchView: {
    alignItems: "center",
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

  roster: {
    height: "56.5%",
    padding: 5,
  },

  shuttleStopwatch: {},
});

export default TimerFitnessScreen;
