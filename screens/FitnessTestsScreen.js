import React, { useState, useRef } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/core';

import CustomButton from "../components/CustomButton";
import activitiesArt from "../assets/activities.png";

const FitnessTestScreen = ({ route }) => {
  const [currentActivity, setCurrentActivity] = useState("");

  const stopwatchRef = useRef();
  const timerRef = useRef();
  const timerScreenRef = useRef();

  const navigation = useNavigation();
  const { studentIDs } = route.params;

  // open activity screen handlers
  const openStaticHandler = ({curlUps=false, pullUps=false, pushUps=false, sitAndReach=false}) => {
    navigation.navigate("Static", {
      studentIDs: studentIDs,
      timerRef: timerRef,
      curlUps: curlUps,
      pullUps: pullUps,
      pushUps: pushUps,
      sitAndReach: sitAndReach
    });
  };

  const openTimerHandler = ({mile=false, shuttle=false, armHang=false}) => {
    navigation.navigate("Timer", {
      studentIDs: studentIDs,
      stopwatchRef: stopwatchRef,
      mile: mile,
      shuttle: shuttle,
      armHang: armHang
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.fitnessTestsView}>
        <View style={styles.fitnessTestsRow}>
          <CustomButton
            title="Curl-Ups"
            borderStyle={styles.button}
            onPress={() => openStaticHandler({curlUps: true})}
          />
          <CustomButton
            title="Sit & Reach"
            borderStyle={styles.button}
            onPress={() => openStaticHandler({sitAndReach: true})}
          />
        </View>
        <View style={styles.fitnessTestsRow}>
          <CustomButton
            title="Push-Ups"
            borderStyle={styles.button}
            onPress={() => openStaticHandler({pushUps: true})}
          />
          <CustomButton
            title="Pull-Ups"
            borderStyle={styles.button}
            onPress={() => openStaticHandler({pullUps: true})}
          />
          <CustomButton
            title="Arm Hang"
            borderStyle={styles.button}
            onPress={() => openTimerHandler({armHang: true})}
          />
        </View>
        <View style={styles.fitnessTestsRow}>
          <CustomButton
            title="Mile Run"
            borderStyle={styles.button}
            onPress={() => openTimerHandler({mile: true})}
          />
          <CustomButton
            title="Shuttle Run"
            borderStyle={styles.button}
            onPress={() => openTimerHandler({shuttle: true})}
          />
        </View>
      </View>
      <View style={{ alignItems: "center", zIndex: -1 }}>
        <Image source={activitiesArt} style={styles.backgroundImage} />
      </View>
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
    bottom: -30,
    height: 400,
    width: 350,
    opacity: 0.4,
  },

  fitnessTestsView: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },

  fitnessTestsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    height: 100,
  },

  button: {
    borderRadius: 40,
    width: 90,
    height: 90,
    marginHorizontal: 20,
    padding: 10,
  },
});

export default FitnessTestScreen;
