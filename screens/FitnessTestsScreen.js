import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Header from "../components/Header";
import ImageButton from "../components/ImageButton";

import StaticFitnessScreen from "./StaticFitnessScreen";
import TimerFitnessScreen from "./TimerFitnessScreen";

import curlUp from "../assets/curlup.jpg";
import pullUp from "../assets/pullup.jpg";
import mileRun from "../assets/mile.jpg";
import shuttleRun from "../assets/shuttlerun.jpg";
import sitAndReach from "../assets/sitandreach.jpg";
import Colors from "../constants/colors";
import Fonts from "../constants/fonts";

const FitnessTestScreen = (props) => {
  const [staticFitnessScreenMode, setStaticFitnessScreenMode] = useState(false);
  const [timerFitnessScreenMode, setTimerFitnessScreenMode] = useState(false);
  const [currentActivity, setCurrentActivity] = useState("");

  const [curlUpsMode, setCurlUpsMode] = useState(false);
  const [pullUpsMode, setPullUpsMode] = useState(false);
  const [mileMode, setMileMode] = useState(false);
  const [shuttleMode, setShuttleMode] = useState(false);
  const [sitAndReachMode, setSitAndReachMode] = useState(false);

  const openCurlUpsHandler = () => {
    setCurrentActivity("Curl-Ups");

    setCurlUpsMode(true);
    setStaticFitnessScreenMode(true);
  };

  const openPullUpsHandler = () => {
    setCurrentActivity("Pull-Ups");

    setPullUpsMode(true);
    setStaticFitnessScreenMode(true);
  };

  const openMileHandler = () => {
    setCurrentActivity("Mile Run");

    setMileMode(true);
    setTimerFitnessScreenMode(true);
  };

  const openShuttleHandler = () => {
    setCurrentActivity("Shuttle Run");

    setShuttleMode(true);
    setTimerFitnessScreenMode(true);
  };

  const openSitAndReachHandler = () => {
    setCurrentActivity("Sit & Reach");

    setSitAndReachMode(true);
    setStaticFitnessScreenMode(true);
  };

  const closeStaticFitnessScreenHandler = () => {
    setPullUpsMode(false);
    setCurlUpsMode(false);
    setSitAndReachMode(false);

    setStaticFitnessScreenMode(false);
  };

  const closeTimerFitnessScreenHandler = () => {
    setMileMode(false);
    setShuttleMode(false);

    setTimerFitnessScreenMode(false);

    for (let i = 0; i < props.studentList.length; ++i) {
      props.saveStudent(props.studentList[i]);
    }
  };

  return (
    <View style={styles.screen}>
      <StaticFitnessScreen
        visible={staticFitnessScreenMode}
        title={currentActivity}
        onCancel={closeStaticFitnessScreenHandler}
        studentList={props.studentList}
        student={props.currentStudent}
        setCurrentStudent={props.setCurrentStudent}
        saveStudent={props.saveStudent}
        studentInfoModeHandler={props.studentInfoModeHandler}
        curlUpsMode={curlUpsMode}
        pullUpsMode={pullUpsMode}
        sitAndReachMode={sitAndReachMode}
      />
      <TimerFitnessScreen
        visible={timerFitnessScreenMode}
        title={currentActivity}
        onCancel={closeTimerFitnessScreenHandler}
        studentList={props.studentList}
        studentInfoModeHandler={props.studentInfoModeHandler}
        mileMode={mileMode}
        shuttleMode={shuttleMode}
        saveStudent={props.saveStudent}
        student={props.currentStudent}
        setCurrentStudent={props.setCurrentStudent}
      />
      <View style={styles.header}>
        <Header style={styles.headerText} title="Fitness Tests" />
      </View>
      <View style={styles.fitnessTestsView}>
        <View style={styles.fitnessTests}>
          <ImageButton
            imageStyle={styles.fitnessButtonImage}
            textStyle={styles.fitnessButtonText}
            title="Curl-Ups"
            source={curlUp}
            onPress={openCurlUpsHandler}
          />
          <ImageButton
            imageStyle={styles.fitnessButtonImage}
            textStyle={styles.fitnessButtonText}
            title="Pull-Ups"
            source={pullUp}
            onPress={openPullUpsHandler}
          />
        </View>
        <View style={styles.fitnessTests}>
          <ImageButton
            imageStyle={styles.fitnessButtonImage}
            textStyle={styles.fitnessButtonText}
            title="Mile Run"
            source={mileRun}
            onPress={openMileHandler}
          />
          <ImageButton
            imageStyle={styles.fitnessButtonImage}
            textStyle={styles.fitnessButtonText}
            title="Shuttle Run"
            source={shuttleRun}
            onPress={openShuttleHandler}
          />
        </View>
        <View style={styles.fitnessTests}>
          <ImageButton
            imageStyle={styles.fitnessButtonImage}
            textStyle={styles.fitnessButtonText}
            title="Sit & Reach"
            source={sitAndReach}
            onPress={openSitAndReachHandler}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.colors.background,
  },

  fitnessTestsView: {
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },

  headerText: {
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },

  fitnessTests: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    height: 100,
  },

  fitnessButtonImage: {
    height: 85,
    width: 85,
    margin: 10,
    borderWidth: 0.25,
    borderRadius: 20,
  },

  fitnessButtonText: {
    fontFamily: Fonts.secondary,
    color: Colors.colors.primary,
    fontSize: 16,
  },
});

export default FitnessTestScreen;
