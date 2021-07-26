import React from "react";
import { View, StyleSheet, Modal } from "react-native";

import Header from "../components/Header";
import StudentRoster from "../components/StudentRoster";

import backArrow from "../assets/backarrow.png";

const StaticFitnessScreen = (props) => {
  return (
    <Modal visible={props.visible} animationType="none">
      <View>
        <View>
          <Header
            title={props.title}
            imageSource={backArrow}
            onPress={props.onCancel}
          />
        </View>
        <StudentRoster
          students={props.studentList}
          onPress={props.studentInfoModeHandler} // change to activity specific screen
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
});

export default StaticFitnessScreen;
