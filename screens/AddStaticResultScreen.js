import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TextInput,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import uuid from "react-native-uuid";

import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

import FormatTimeFunctions from "../functions/FormatTimeFunctions";

import Colors from "../constants/colors";

import backArrow from "../assets/backarrow.png";
import addResultArt from "../assets/staticfitness.png";

const AddStaticResultScreen = ({ student, ...props }) => {
  const [enteredValue, setEnteredValue] = useState("");

  const addInputHandler = () => {
    if (enteredValue == "") {
      Alert.alert("Missing Field", "Please enter a number to submit.", [
        { text: "OK", style: "cancel", onPress: () => {} },
      ]);
    } else {
      let entry = {
        key: uuid.v1(),
        date: FormatTimeFunctions.formatDate(),
        value: enteredValue,
      };

      if (props.curlUpsMode) {
        student.curlUps.push(entry);
      } else if (props.pullUpsMode) {
        student.pullUps.push(entry);
      } else if (props.pushUpsMode) {
        student.pushUps.push(entry);
      } else {
        student.sitAndReach.push(entry);
      }

      props.saveStudent(props.student);
      props.setStaticResultScreen(false);

      setEnteredValue("");
    }
  };

  let placeholder;
  let keyboard = "number-pad";

  if (props.curlUpsMode) {
    placeholder = "# of Curl-Ups";
  } else if (props.pullUpsMode) {
    placeholder = "# of Pull-Ups";
  } else if (props.pushUpsMode) {
    placeholder = "# of Push-Ups";
  } else {
    placeholder = "Reach Length (cm)";
    keyboard = "numeric";
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <ScrollView contentContainerStyle={styles.screen} scrollEnabled={false}>
        <Header
          title={props.title}
          style={styles.studentName}
          imageSource={backArrow}
          onPress={props.onCancel}
        />
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
      </ScrollView>
      <View style={{ alignItems: "center", zIndex: -1 }}>
        <Image source={addResultArt} style={styles.backgroundImage} />
      </View>
    </Modal>
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
    position: "absolute",
    bottom: 10,
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
