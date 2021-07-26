import React from "react";
import { View, Text, StyleSheet, Modal, Button } from "react-native";

import Header from "../components/Header";

import backArrow from "../assets/backarrow.png";

const StudentInfoScreen = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View>
        <View>
          <Header
            title="Student"
            imageSource={backArrow}
            onPress={props.onCancel}
          />
        </View>
        <View style={styles.basicInfo}>
          <Text>
            Name: {props.student.firstName} {props.student.lastName}
          </Text>
          <Text>Age: {props.student.age}</Text>
          <Text>Gender: {props.student.gender}</Text>
        </View>
        <View style={styles.fitnessInfo}>
          <Text>Curl-Ups: {props.student.curlUps}</Text>
          <Text>Pull-Ups: {props.student.pullUps}</Text>
          <Text>Mile Run: {props.student.mile}</Text>
          <Text>Shuttle Run: {props.student.shuttle}</Text>
          <Text>Sit & Reach: {props.student.sitAndReach}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Delete Student"
            color="red"
            onPress={props.onDelete}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  basicInfo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  fitnessInfo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  buttonContainer: {
    marginTop: 100,
  },

  button: {
    width: "20%",
  },
});

export default StudentInfoScreen;
