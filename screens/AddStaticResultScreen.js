import React, { useState } from "react";
import { View, StyleSheet, Modal, TextInput, Button } from "react-native";

import Header from "../components/Header";

import backArrow from "../assets/backarrow.png";
import colors from "../constants/colors";

const AddStaticResultScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const inputHandler = (enteredText) => {
    setEnteredValue(enteredText);
  };

  const addInputHandler = () => {
    if (props.curlUpsMode) {
      props.student.curlUps = enteredValue;
    } else if (props.pullUpsMode) {
      props.student.pullUps = enteredValue;
    } else {
      props.student.sitAndReach = enteredValue;
    }

    props.setStaticResultScreen(false);
    props.saveStudent(props.student);
    setEnteredValue("");
  };

  let input;

  if (props.curlUpsMode) {
    input = (
      <TextInput
        placeholder="# of Curl-Ups"
        style={styles.input}
        onChangeText={inputHandler}
        value={enteredValue}
        keyboardType="number-pad"
      />
    );
  } else if (props.pullUpsMode) {
    input = (
      <TextInput
        placeholder="# of Pull-Ups"
        style={styles.input}
        onChangeText={inputHandler}
        value={enteredValue}
        keyboardType="number-pad"
      />
    );
  } else {
    input = (
      <TextInput
        placeholder="Reach Length"
        style={styles.input}
        onChangeText={inputHandler}
        value={enteredValue}
        keyboardType="number-pad"
      />
    );
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <Header
          title={props.title}
          style={styles.studentName}
          imageSource={backArrow}
          onPress={props.onCancel}
        />

        <View style={styles.staticView}>
          <View style={styles.inputView}>
            {input}
            <View style={styles.button}>
              <Button
                title="Confirm Score"
                color={colors.primary}
                onPress={addInputHandler}
              />
            </View>
          </View>
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

  studentName: {
    fontSize: 20,
  },

  inputView: {
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    marginTop: 200,
    width: "100%",
    height: "60%",
  },

  staticView: {
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    borderWidth: 1,
    padding: 15,
    width: "55%",
    textAlign: "center",
    backgroundColor: colors.tertiary,
    borderRadius: 15,
  },

  button: {
    marginTop: 20,
    margin: 10,
  },
});

export default AddStaticResultScreen;
