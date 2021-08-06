import React, { useState } from "react";
import { View, StyleSheet, Modal, Button } from "react-native";

import Header from "../components/Header";
import StudentRoster from "../components/StudentRoster";
import Stopwatch from "../components/Stopwatch";

import backArrow from "../assets/backarrow.png";
import Colors from "../constants/colors";

const TimerFitnessScreen = (props) => {
  const [csecs, setCsecs] = useState(0);
  const [, setDummyValue] = useState(false);

  const formatMileTime = () => {
    const centisecs = `0${csecs % 100}`.slice(-2);
    const seconds = `0${Math.floor(csecs / 100) % 60}`.slice(-2);
    const minutes = `0${Math.floor(csecs / 100 / 60)}`.slice(-2);

    return `${minutes}:${seconds}.${centisecs}`;
  };

  const formatShuttleTime = () => {
    let format;

    const centisecs = `0${csecs % 100}`.slice(-2);
    const seconds = `0${Math.floor(csecs / 100) % 60}`.slice(-2);

    if (csecs / 100 >= 60) {
      const minutes = `0${Math.floor(csecs / 100 / 60)}`.slice(-2);
      format = `${minutes}:${seconds}.${centisecs}`;
    } else {
      format = `${seconds}.${centisecs}`;
    }

    return format;
  };

  const forceUpdate = () => {
    setDummyValue((val) => !val);
  };

  const formatDate = () => {
    const now = new Date();

    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear() % 100;

    return `${month}/${day}/${year}`;
  };

  const setTimerScoreHandler = (studentID) => {
    if (csecs == 0) {
      return;
    }

    let currentStudent;

    for (let i = 0; i < props.studentList.length; ++i) {
      currentStudent = props.studentList[i];

      if (studentID == currentStudent.key) {
        break;
      }
    }

    const currentSeconds = csecs / 100;
    const entry = [formatDate(), currentSeconds];

    if (props.mileMode) {
      currentStudent.mile.push(entry);
    } else {
      currentStudent.shuttle.push(entry);
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
          <Stopwatch format={timeFormat} csecs={csecs} setCsecs={setCsecs} />
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
