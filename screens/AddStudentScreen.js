import React, { useState } from "react";
import { Modal, View, TextInput, Button, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

import Header from "../components/Header";

import backArrow from "../assets/backarrow.png";

const AddStudentScreen = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState(0);
  const [enteredGender, setEnteredGender] = useState("");

  const nameInputHandler = (enteredText) => {
    setEnteredName(enteredText);
  };

  const ageInputHandler = (enteredText) => {
    setEnteredAge(enteredText.replace(/[^0-9]/g, ""));
  };

  const addStudentHandler = (studentName, studentAge, studentGender) => {
    props.addStudent(enteredName, enteredAge, enteredGender);

    setEnteredName("");
    setEnteredAge(0);
    setEnteredGender("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View>
        <Header
          title="New Student"
          imageSource={backArrow}
          onPress={props.onCancel}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Student Name"
          style={styles.nameTextBox}
          onChangeText={nameInputHandler}
          value={enteredName}
        />
        <TextInput
          placeholder="Age"
          style={styles.ageTextBox}
          onChangeText={ageInputHandler}
          value={enteredAge}
          keyboardType="number-pad"
          maxLength={2}
        />
        <View style={styles.radioButtons}>
          <RadioButton.Group
            onValueChange={(newValue) => setEnteredGender(newValue)}
            value={enteredGender}
          >
            <View style={styles.radioButton}>
              <RadioButton.Item label="Boy" value="Boy" />
            </View>
            <View style={styles.radioButton}>
              <RadioButton.Item label="Girl" value="Girl" />
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.buttonsView}>
          <View style={styles.button}>
            <Button title="Add Student" onPress={addStudentHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  nameTextBox: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: "80%",
    textAlign: "center",
  },

  ageTextBox: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: "15%",
    textAlign: "center",
  },

  radioButtons: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },

  radioButton: {
    borderWidth: 1,
    margin: 4,
  },

  button: {
    top: 75,
  },
});

export default AddStudentScreen;
