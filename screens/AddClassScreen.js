import React, { useState } from "react";
import {
  View,
  TextInput,
  Alert,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import uuid from "react-native-uuid";
import { auth, database } from "../firebase";

import CustomButton from "../components/CustomButton";
import FormatTimeFunctions from "../functions/FormatTimeFunctions";
import Colors from "../constants/colors";
import backgroundImage from "../assets/ponder.png";

const AddClassScreen = ({ navigation }) => {
  const [className, setClassName] = useState("");

  const addClassHandler = () => {
    if (className == "") {
      Alert.alert("Missing Field", "Please enter a class name.", [
        { text: "OK", style: "cancel", onPress: () => {} },
      ]);
    } else {
      database.ref(`users/${auth.currentUser.uid}/classes/${uuid.v1()}`).set({
        name: className,
        created: FormatTimeFunctions.formatDate(),
      });

      setClassName("");
      navigation.goBack();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.screen}>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Class Name"
            style={styles.nameTextBox}
            onChangeText={(input) => setClassName(input)}
            value={className}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="Add Class" onPress={addClassHandler} />
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
    backgroundColor: Colors.colors.primary,
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

  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});

export default AddClassScreen;
