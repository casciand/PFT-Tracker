import React, { useState } from "react";
import { Modal, View, TextInput, Button, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

import Header from "../components/Header";

import backArrow from "../assets/backarrow.png";
import colors from "../constants/colors";

const AddStudentScreen = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredGender, setEnteredGender] = useState("");

  const firstNameInputHandler = (enteredText) => {
    setEnteredFirstName(enteredText);
  };

  const lastNameInputHandler = (enteredText) => {
    setEnteredLastName(enteredText);
  };

  const ageInputHandler = (enteredText) => {
    setEnteredAge(enteredText.replace(/[^0-9]/g, ""));
  };

  const addStudentHandler = () => {
    let newStudent = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      age: enteredAge,
      gender: enteredGender,
      curlUps: null,
      pullUps: null,
      mile: null,
      shuttle: null,
      sitAndReach: null,
      passedPresidential: false,
      passedNational: false,
    };

    props.addStudent(newStudent);

    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredAge("");
    setEnteredGender("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <Header
          title="New Student"
          imageSource={backArrow}
          onPress={props.onCancel}
        />
        <View style={styles.inputView}>
          <TextInput
            placeholder="First Name"
            style={styles.nameTextBox}
            onChangeText={firstNameInputHandler}
            value={enteredFirstName}
          />
          <TextInput
            placeholder="Last Name"
            style={styles.nameTextBox}
            onChangeText={lastNameInputHandler}
            value={enteredLastName}
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
          <View style={styles.button}>
            <Button title="Add Student" onPress={addStudentHandler} />
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

  inputView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  nameTextBox: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: "60%",
    textAlign: "center",
    backgroundColor: "white",
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
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginTop: 10,
  },

  radioButton: {
    borderWidth: 1,
    marginBottom: 10,
  },

  button: {
    top: 75,
  },
});

export default AddStudentScreen;
