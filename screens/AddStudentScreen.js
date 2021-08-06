import React, { useState } from "react";
import { Modal, View, TextInput, Alert, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

import backArrow from "../assets/backarrow.png";
import Colors from "../constants/colors";

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
    if (
      enteredFirstName == "" ||
      enteredLastName == "" ||
      enteredAge == "" ||
      enteredGender == ""
    ) {
      Alert.alert(
        "Missing Fields",
        "You must complete all fields to create a student.",
        [{ text: "OK", style: "cancel", onPress: () => {} }]
      );

      return;
    }

    let newStudent = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      age: enteredAge,
      gender: enteredGender,
      curlUps: [],
      pullUps: [],
      pushUps: [],
      mile: [],
      shuttle: [],
      sitAndReach: [],
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
          <RadioButton.Group
            onValueChange={(newValue) => setEnteredGender(newValue)}
            value={enteredGender}
          >
            <View style={styles.radioButtons}>
              <View style={styles.radioButton}>
                <RadioButton.Item label="Boy" value="Boy" />
              </View>
              <View style={styles.radioButton}>
                <RadioButton.Item label="Girl" value="Girl" />
              </View>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.buttonView}>
          <View style={{ zIndex: 2 }}>
            <CustomButton title="Add Student" onPress={addStudentHandler} />
          </View>
          {/* <View style={styles.largerCircle}></View>
          <View style={styles.smallCircle}></View>
          <View style={styles.largeCircle}></View> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.colors.background,
  },

  inputView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    backgroundColor: Colors.shades.primary,
    paddingVertical: 30,
    marginHorizontal: 30,
    borderRadius: 15,
    borderWidth: 1,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
    zIndex: 2,
  },

  nameTextBox: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    width: "60%",
    textAlign: "center",
    backgroundColor: "white",
  },

  ageTextBox: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    width: "18%",
    textAlign: "center",
    backgroundColor: "white",
  },

  radioButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    marginTop: 10,
  },

  radioButton: {
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    backgroundColor: "white",
  },

  buttonView: {
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: Colors.shades.secondary,
    position: "absolute",
    height: "40%",
    width: "100%",
    paddingTop: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.4,
    elevation: 5,
    bottom: 0,
    //borderWidth: 1,
    zIndex: 1,
  },

  smallCircle: {
    backgroundColor: Colors.colors.background,
    borderRadius: 100,
    width: 160,
    height: 160,
    zIndex: 3,
    left: -40,
    bottom: -40,
    position: "absolute",
    borderWidth: 1,
  },

  largeCircle: {
    backgroundColor: Colors.colors.background,
    borderRadius: 100,
    width: 200,
    height: 200,
    zIndex: 3,
    left: 40,
    bottom: -160,
    position: "absolute",
    borderWidth: 1,
  },

  largerCircle: {
    backgroundColor: Colors.colors.background,
    borderRadius: 100,
    width: 200,
    height: 200,
    zIndex: 1,
    right: -40,
    bottom: 60,
    position: "absolute",
    borderWidth: 1,
  },
});

export default AddStudentScreen;
