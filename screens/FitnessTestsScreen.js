import React, { useState, useRef } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/core';

import StaticFitnessScreen from "./StaticFitnessScreen";
import TimerFitnessScreen from "./TimerFitnessScreen";

import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

import activitiesArt from "../assets/activities.png";

const FitnessTestScreen = ({route}) => {
  const [flexedArmHangMode, setFlexedArmHangMode] = useState(false);
  const [mileMode, setMileMode] = useState(false);
  const [shuttleMode, setShuttleMode] = useState(false);

  const [currentActivity, setCurrentActivity] = useState("");

  const stopwatchRef = useRef();
  const timerRef = useRef();
  const timerScreenRef = useRef();

  const navigation = useNavigation();
  const { roster } = route.params;

  // open/close activity screen handlers
  const openCurlUpsHandler = () => {
    setCurrentActivity("Curl-Ups");
    navigation.navigate("Static", {
      curlUpsMode: true,
      roster: roster,
      timerRef: timerRef
    });
  };

  const openPullUpsHandler = () => {
    setCurrentActivity("Pull-Ups");
    navigation.navigate("Static", {
      curlUpsMode: false,
      roster: roster,
    });
  };

  const openPushUpsHandler = () => {
    setCurrentActivity("Push-Ups");
    navigation.navigate("Static", {
      curlUpsMode: false,
      roster: roster
    });
  };

  const openFlexedArmHangHandler = () => {
    setCurrentActivity("Flexed Arm Hang");
    setFlexedArmHangMode(true);
    navigation.navigate("Timer");
  };

  const openMileHandler = () => {
    setCurrentActivity("Mile Run");
    setMileMode(true);
    navigation.navigate("Timer");
  };

  const openShuttleHandler = () => {
    setCurrentActivity("Shuttle Run");
    setShuttleMode(true);
    navigation.navigate("Timer");
  };

  const openSitAndReachHandler = () => {
    setCurrentActivity("Sit & Reach");
    navigation.navigate("Static", {
      curlUpsMode: false,
      roster: roster
    });
  };

  // const closeStaticFitnessScreenHandler = () => {
  //   if (curlUpsMode) {
  //     timerRef.current.resetTimerHandler();
  //   }

  //   setPullUpsMode(false);
  //   setCurlUpsMode(false);
  //   setPushUpsMode(false);
  //   setSitAndReachMode(false);
  // };

  // const closeTimerFitnessScreenHandler = () => {
  //   setMileMode(false);
  //   setShuttleMode(false);
  //   setFlexedArmHangMode(false);

  //   stopwatchRef.current.resetStopwatchHandler();
  //   timerScreenRef.current.resetCurrentList();

  //   for (let i = 0; i < props.studentList.length; ++i) {
  //     props.studentList[i].lapCount = 0;
  //     props.saveStudent(props.studentList[i]);
  //   }
  // };

  return (
    <View style={styles.screen}>
      <View style={styles.fitnessTestsView}>
        <View style={styles.fitnessTestsRow}>
          <CustomButton
            title="Curl-Ups"
            borderStyle={styles.button}
            onPress={openCurlUpsHandler}
          />
          <CustomButton
            title="Sit & Reach"
            borderStyle={styles.button}
            onPress={openSitAndReachHandler}
          />
        </View>
        <View style={styles.fitnessTestsRow}>
          <CustomButton
            title="Push-Ups"
            borderStyle={styles.button}
            onPress={openPushUpsHandler}
          />
          <CustomButton
            title="Pull-Ups"
            borderStyle={styles.button}
            onPress={openPullUpsHandler}
          />
          <CustomButton
            title="Arm Hang"
            borderStyle={styles.button}
            onPress={openFlexedArmHangHandler}
          />
        </View>
        <View style={styles.fitnessTestsRow}>
          <CustomButton
            title="Mile Run"
            borderStyle={styles.button}
            onPress={openMileHandler}
          />
          <CustomButton
            title="Shuttle Run"
            borderStyle={styles.button}
            onPress={openShuttleHandler}
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
