import React, { useState } from "react";
import { View, StyleSheet, Modal, TextInput, Button } from "react-native";

import Header from "../components/Header";

import backArrow from "../assets/backarrow.png";

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
      <View>
        <Header
          title={props.title}
          imageSource={backArrow}
          onPress={props.onCancel}
        />
      </View>
      <View style={styles.inputView}>{input}</View>
      <View style={styles.button}>
        <Button title="Confirm Score" onPress={addInputHandler} />
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
    marginBottom: 300,
  },

  inputView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: "35%",
    textAlign: "center",
  },
});

export default AddStaticResultScreen;
