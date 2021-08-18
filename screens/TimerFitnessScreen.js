import React, { useState, useImperativeHandle, forwardRef } from "react";
import { View, StyleSheet, Modal, Image } from "react-native";
import uuid from "react-native-uuid";

import Header from "../components/Header";
import StudentRoster from "../components/StudentRoster";
import Stopwatch from "../components/Stopwatch";

import FormatTimeFunctions from "../functions/FormatTimeFunctions";

import Colors from "../constants/colors";

import backArrow from "../assets/backarrow.png";
import timerArt from "../assets/timerfitness.png";

const TimerFitnessScreen = (props, ref) => {
  const [currentList, setCurrentList] = useState(props.studentList);

  const [csecs, setCsecs] = useState(0);

  // dummy state to force certain re-renders
  const [, setDummyValue] = useState(false);

  const forceUpdate = () => {
    setDummyValue((val) => !val);
  };

  useImperativeHandle(ref, () => ({
    resetCurrentList: () => {
      setCurrentList(props.studentList);
    },
  }));

  const setTimerScoreHandler = (studentID) => {
    const currentSeconds = csecs / 100;

    let currentStudent;

    for (let i = 0; i < props.studentList.length; ++i) {
      currentStudent = props.studentList[i];

      if (studentID == currentStudent.key) {
        break;
      }
    }

    let entry = {
      key: uuid.v1(),
      date: FormatTimeFunctions.formatDate(),
      value: currentSeconds,
    };

    if (props.mileMode) {
      currentStudent.mile.push(entry);
    } else if (props.shuttleMode) {
      currentStudent.shuttle.push(entry);
    } else {
      currentStudent.flexedArmHang.push(entry);
    }

    forceUpdate();
  };

  const onPressStudent = (studentID) => {
    if (csecs == 0) {
      return;
    }

    let student;

    for (let i = 0; i < props.studentList.length; ++i) {
      student = props.studentList[i];

      if (studentID == student.key) {
        break;
      }
    }

    if (props.mileMode) {
      if (student.lapCount < 3) {
        student.lapCount += 1;
        forceUpdate();
        return;
      }
    }

    setTimerScoreHandler(studentID);
    setCurrentList((list) => {
      return list.filter((student) => student.key != studentID);
    });
  };

  let timeFormat =
    props.shuttleMode || props.flexedArmHangMode
      ? FormatTimeFunctions.formatTimeSeconds
      : FormatTimeFunctions.formatTimeMinutes;

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.screen}>
        <Header
          title={props.title}
          imageSource={backArrow}
          onPress={props.onCancel}
        />
        <View style={styles.stopwatchView}>
          <Stopwatch
            csecs={csecs}
            studentList={props.studentList}
            setCsecs={setCsecs}
            format={timeFormat}
            ref={props.stopwatchRef}
          />
        </View>
        <View style={styles.roster}>
          <StudentRoster
            onPress={onPressStudent}
            studentList={currentList}
            mileMode={props.mileMode}
            shuttleMode={props.shuttleMode}
            flexedArmHangMode={props.flexedArmHangMode}
          />
        </View>
      </View>
      <View style={{ alignItems: "center", zIndex: -1 }}>
        <Image source={timerArt} style={styles.backgroundImage} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },

  backgroundImage: {
    bottom: 20,
    height: 280,
    width: 280,
    opacity: 0.4,
  },

  stopwatchView: {
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

  roster: {
    height: "90%",
    padding: 5,
  },
});

export default forwardRef(TimerFitnessScreen);
