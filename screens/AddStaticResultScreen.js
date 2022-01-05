import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import uuid from "react-native-uuid";
import { auth, database } from "../firebase";

import CustomButton from "../components/CustomButton";
import Colors from "../constants/colors";
import FormatTimeFunctions from "../functions/FormatTimeFunctions";
import addResultArt from "../assets/staticfitness.png";

const AddStaticResultScreen = ({ route }) => {
  const [enteredValue, setEnteredValue] = useState("");

  const { id, curlUps, pullUps, pushUps, sitAndReach } = route.params;

  const setScore = (score) => {
    let activity;

    if (curlUps) {
      activity = "curlUps";
    } else if (pullUps) {
      activity = "pullUps";
    } else if (pushUps) {
      activity = "pushUps";
    } else {
      activity = "sitAndReach"
    }

    database.ref('users/' + auth.currentUser.uid + "/students/" + id + `/${activity}/` + uuid.v1()).set({
      date: FormatTimeFunctions.formatDate(),
      score: score
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
      <ScrollView contentContainerStyle={styles.screen} scrollEnabled={false}>
        <View style={{ alignItems: "center" }}>
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
            <View style={styles.button}>
              <CustomButton title="Submit" onPress={addInputHandler} />
            </View>
          </View>
        </View>
        <View style={{ alignItems: "center", zIndex: -1 }}>
          <Image source={addResultArt} style={styles.backgroundImage} />
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },

  studentName: {
    fontSize: 20,
  },

  backgroundImage: {
    bottom: 120,
    height: 280,
    width: 280,
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
    height: "60%",
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

  button: {
    marginTop: 20,
    margin: 10,
  },
});

export default AddStaticResultScreen;
