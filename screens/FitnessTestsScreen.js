import React, { useRef } from "react";
import { View, StyleSheet, Image } from "react-native";

import CustomButton from "../components/CustomButton";
import Colors from "../constants/colors";
import backgroundImage from "../assets/hurdles.png";

const FitnessTestScreen = ({ route, navigation }) => {
  const stopwatchRef = useRef();
  const timerRef = useRef();

  const { classID, studentIDs } = route.params;

  // open activity screen handlers
  const openStaticHandler = ({
    curlUps = false,
    pullUps = false,
    pushUps = false,
    sitAndReach = false,
  }) => {
    navigation.navigate("Static", {
      classID: classID,
      studentIDs: studentIDs,
      timerRef: timerRef,
      curlUps: curlUps,
      pullUps: pullUps,
      pushUps: pushUps,
      sitAndReach: sitAndReach,
    });
  };

  const openTimerHandler = ({ mile = false, shuttle = false, armHang = false }) => {
    navigation.navigate("Timer", {
      classID: classID,
      studentIDs: studentIDs,
      stopwatchRef: stopwatchRef,
      mile: mile,
      shuttle: shuttle,
      armHang: armHang,
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Curl-Ups"
          borderStyle={styles.button}
          onPress={() => openStaticHandler({ curlUps: true })}
        />
        <CustomButton
          title="Sit & Reach"
          borderStyle={styles.button}
          onPress={() => openStaticHandler({ sitAndReach: true })}
        />
        <CustomButton
          title="Push-Ups"
          borderStyle={styles.button}
          onPress={() => openStaticHandler({ pushUps: true })}
        />
        <CustomButton
          title="Pull-Ups"
          borderStyle={styles.button}
          onPress={() => openStaticHandler({ pullUps: true })}
        />
        <CustomButton
          title="Arm Hang"
          borderStyle={styles.button}
          onPress={() => openTimerHandler({ armHang: true })}
        />
        <CustomButton
          title="Mile Run"
          borderStyle={styles.button}
          onPress={() => openTimerHandler({ mile: true })}
        />
        <CustomButton
          title="Shuttle Run"
          borderStyle={styles.button}
          onPress={() => openTimerHandler({ shuttle: true })}
        />
      </View>
      <Image source={backgroundImage} style={styles.backgroundImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },

  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    zIndex: -1,
    opacity: 0.2,
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderWidth: 0.5,
    width: 200,
    height: 60,
    marginVertical: 8,
    backgroundColor: Colors.colors.primary,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
});

export default FitnessTestScreen;
