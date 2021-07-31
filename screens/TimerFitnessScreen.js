import React from "react";
import { View, StyleSheet, Modal, Text } from "react-native";

import Header from "../components/Header";
import StudentRoster from "../components/StudentRoster";

import backArrow from "../assets/backarrow.png";

const TimerFitnessScreen = (props) => {
  const setTimerScoreHandler = () => {};

  return (
    <Modal visible={props.visible} animationType="none">
      <View>
        <Header
          title={props.title}
          imageSource={backArrow}
          onPress={props.onCancel}
        />
      </View>
      <View style={styles.stopwatch}>
        <Text>Insert Stopwatch Component Here</Text>
      </View>
      <View style={styles.roster}>
        <StudentRoster
          students={props.studentList}
          onPress={setTimerScoreHandler} // change to activity specific screen
          mileMode={props.mileMode}
          shuttleMode={props.shuttleMode}
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

  stopwatch: {
    alignItems: "center",
    margin: 10,
  },

  roster: {
    height: "84.5%",
    padding: 5,
  },
});

export default TimerFitnessScreen;
