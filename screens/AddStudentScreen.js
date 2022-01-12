import React, { useState } from "react";
import {
  View,
  TextInput,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { RadioButton } from "react-native-paper";
import uuid from "react-native-uuid";
import { auth, database } from "../firebase";

import CustomButton from "../components/CustomButton";
import colors from "../constants/colors";
import backgroundImage from "../assets/ponder.png";

const AddStudentScreen = ({ route }) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredGender, setEnteredGender] = useState("");

  const { classID } = route.params;

  const addStudent = (newStudent) => {
    try {
      database
        .ref(`users/${auth.currentUser.uid}/classes/${classID}/students/${newStudent.id}`)
        .set({
          firstName: newStudent.firstName,
          lastName: newStudent.lastName,
          age: newStudent.age,
          isMale: newStudent.isMale,
        });

      Alert.alert(
        "Success!",
        `${newStudent.firstName} ${newStudent.lastName}${
          newStudent.lastName.slice(-1) == "s" ? "'" : "'s"
        } profile was created.`,
        [{ text: "OK", style: "cancel", onPress: () => {} }]
      );
    } catch (error) {
      console.error(error);
    }
  };

  const addStudentHandler = () => {
    if (
      enteredFirstName == "" ||
      enteredLastName == "" ||
      enteredAge == "" ||
      enteredGender == ""
    ) {
      Alert.alert("Missing Fields", "Please fill in all fields to create a student.", [
        { text: "OK", style: "cancel", onPress: () => {} },
      ]);
    } else {
      // define a new student
      let newStudent = {
        firstName: enteredFirstName.trim(),
        lastName: enteredLastName.trim(),
        age: parseInt(enteredAge),
        isMale: enteredGender == "Boy",
        id: uuid.v1(),
      };

      addStudent(newStudent);

      setEnteredFirstName("");
      setEnteredLastName("");
      setEnteredAge("");
      setEnteredGender("");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.screen}>
        <View style={styles.inputView}>
          <TextInput
            placeholder="First Name"
            style={styles.nameTextBox}
            onChangeText={(input) => {
              setEnteredFirstName(input);
            }}
            value={enteredFirstName}
          />
          <TextInput
            placeholder="Last Name"
            style={styles.nameTextBox}
            onChangeText={(input) => {
              setEnteredLastName(input);
            }}
            value={enteredLastName}
          />
          <TextInput
            placeholder="Age"
            style={styles.ageTextBox}
            onChangeText={(input) => {
              setEnteredAge(input);
            }}
            value={enteredAge}
            keyboardType="number-pad"
            maxLength={2}
          />
          <RadioButton.Group onValueChange={(val) => setEnteredGender(val)} value={enteredGender}>
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
        </View>
        <Image source={backgroundImage} style={styles.backgroundImage} />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },

  backgroundImage: {
    marginTop: "40%",
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    zIndex: -1,
  },

  inputView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: colors.primary,
    paddingVertical: 30,
    marginHorizontal: 30,
    borderRadius: 15,
    borderWidth: 0.5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
    zIndex: 2,
  },

  nameTextBox: {
    borderWidth: 0.5,
    borderRadius: 15,
    padding: 9,
    marginBottom: 10,
    width: "60%",
    textAlign: "center",
    backgroundColor: "white",
  },

  ageTextBox: {
    borderWidth: 0.5,
    borderRadius: 15,
    padding: 9,
    marginBottom: 5,
    width: "18%",
    textAlign: "center",
    backgroundColor: "white",
  },

  radioButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  radioButton: {
    borderWidth: 0.5,
    borderRadius: 15,
    marginHorizontal: 10,
    backgroundColor: "white",
    height: 50,
    width: 100,
  },

  buttonView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});

export default AddStudentScreen;
