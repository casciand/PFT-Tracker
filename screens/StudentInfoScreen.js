import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";

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
        <Text style={styles.name}>
          {props.student.name} ( {props.student.gender}, {props.student.age} )
        </Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  name: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StudentInfoScreen;
