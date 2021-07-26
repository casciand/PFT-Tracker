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
        <View style={styles.name}>
          <Text>Name: {props.student.name}</Text>
          <Text>Age: {props.student.age}</Text>
          <Text>Gender: {props.student.gender}</Text>
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
  name: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  buttonContainer: {
    marginTop: 350,
  },

  button: {
    width: "20%",
  },
});

export default StudentInfoScreen;
