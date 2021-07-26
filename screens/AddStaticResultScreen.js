import React, { useState } from "react";
import { View, StyleSheet, Modal, TextInput, Button } from "react-native";

import Header from "../components/Header";

import backArrow from "../assets/backarrow.png";

const AddStaticResultScreen = (props) => {
  const [enteredCurlUps, setEnteredCurlUps] = useState("");

  const curlUpsInputHandler = (enteredText) => {
    setEnteredCurlUps(enteredText);
  };

  const addCurlUpsHandler = () => {
    props.student.curlUps = enteredCurlUps;
    setEnteredCurlUps("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View>
        <Header
          title={props.title}
          imageSource={backArrow}
          onPress={props.onCancel}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="# of Curl-Ups"
          style={styles.input}
          onChangeText={curlUpsInputHandler}
          value={enteredCurlUps}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.button}>
        <Button title="Confirm Score" onPress={addCurlUpsHandler} />
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
