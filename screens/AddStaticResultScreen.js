import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import uuid from "react-native-uuid";
import { auth, database } from "../firebase";

import CustomButton from "../components/CustomButton";
import FormatTimeFunctions from "../functions/FormatTimeFunctions";
import Colors from "../constants/colors";
import backgroundImage from "../assets/situp.png";

const AddStaticResultScreen = ({ route }) => {
  const [enteredValue, setEnteredValue] = useState("");

  const { classID, studentID, curlUps, pullUps, pushUps, sitAndReach } = route.params;

  const setScore = (score) => {
    let activity;

    if (curlUps) {
      activity = "curlUps";
    } else if (pullUps) {
      activity = "pullUps";
    } else if (pushUps) {
      activity = "pushUps";
    } else {
      activity = "sitAndReach";
    }

    database
      .ref(
        `users/${
          auth.currentUser.uid
        }/classes/${classID}/students/${studentID}/${activity}/${uuid.v1()}`
      )
      .set({
        date: FormatTimeFunctions.formatDate(),
        score: score,
      });
  };

  const addInputHandler = () => {
    if (enteredValue == "") {
      Alert.alert("Missing Field", "Please enter a number to submit.", [
        { text: "OK", style: "cancel", onPress: () => {} },
      ]);
    } else {
      setScore(enteredValue);
      setEnteredValue("");
    }
  };

  // set keyboard type and placeholder text
  let placeholder;
  let keyboard = "number-pad";

  if (curlUps) {
    placeholder = "# of Curl-Ups";
  } else if (pullUps) {
    placeholder = "# of Pull-Ups";
  } else if (pushUps) {
    placeholder = "# of Push-Ups";
  } else {
    placeholder = "Reach Length (cm)";
    keyboard = "numeric";
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.screen}>
        <View style={styles.inputView}>
          <TextInput
            placeholder={placeholder}
            style={styles.input}
            onChangeText={(input) => {
              setEnteredValue(input);
            }}
            value={enteredValue}
            maxLength={3}
            keyboardType={keyboard}
          />
          <View style={styles.buttonContainer}>
            <CustomButton title="Submit" onPress={addInputHandler} />
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
    alignItems: "center",
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
    backgroundColor: Colors.shades.secondary,
    paddingVertical: 30,
    marginHorizontal: 30,
    borderRadius: 15,
    borderWidth: 1,
    height: "40%",
    width: "80%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5,
    zIndex: 2,
  },

  input: {
    borderWidth: 1,
    padding: 15,
    width: "55%",
    textAlign: "center",
    backgroundColor: Colors.colors.background,
    borderRadius: 15,
  },

  buttonContainer: {
    marginTop: 20,
  },
});

export default AddStaticResultScreen;
