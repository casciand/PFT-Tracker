import React, { useState, useRef } from "react";
import { View, StyleSheet, Image } from "react-native";

import StaticFitnessScreen from "./StaticFitnessScreen";
import TimerFitnessScreen from "./TimerFitnessScreen";

import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

import activitiesArt from "../assets/activities.png";

const FitnessTestScreen = (props) => {
  const [staticFitnessScreenMode, setStaticFitnessScreenMode] = useState(false);
  const [timerFitnessScreenMode, setTimerFitnessScreenMode] = useState(false);

  const [curlUpsMode, setCurlUpsMode] = useState(false);
  const [pullUpsMode, setPullUpsMode] = useState(false);
  const [pushUpsMode, setPushUpsMode] = useState(false);
  const [flexedArmHangMode, setFlexedArmHangMode] = useState(false);
  const [sitAndReachMode, setSitAndReachMode] = useState(false);
  const [mileMode, setMileMode] = useState(false);
  const [shuttleMode, setShuttleMode] = useState(false);

  const [currentActivity, setCurrentActivity] = useState("");

  const stopwatchRef = useRef();
  const timerRef = useRef();
  const timerScreenRef = useRef();

  // open/close activity screen handlers
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

  const openPushUpsHandler = () => {
    setCurrentActivity("Push-Ups");

    setPushUpsMode(true);
    setStaticFitnessScreenMode(true);
  };

  const openFlexedArmHangHandler = () => {
    setCurrentActivity("Flexed Arm Hang");

    setFlexedArmHangMode(true);
    setTimerFitnessScreenMode(true);
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
    if (curlUpsMode) {
      timerRef.current.resetTimerHandler();
    }

    setPullUpsMode(false);
    setCurlUpsMode(false);
    setPushUpsMode(false);
    setSitAndReachMode(false);

    setStaticFitnessScreenMode(false);
  };

  const closeTimerFitnessScreenHandler = () => {
    setMileMode(false);
    setShuttleMode(false);
    setFlexedArmHangMode(false);

    setTimerFitnessScreenMode(false);
    stopwatchRef.current.resetStopwatchHandler();
    timerScreenRef.current.resetCurrentList();

    for (let i = 0; i < props.studentList.length; ++i) {
      props.studentList[i].lapCount = 0;
      props.saveStudent(props.studentList[i]);
    }
  };

  let content = props.currentStudent ? (
    <>
      <StaticFitnessScreen
        visible={staticFitnessScreenMode}
        title={currentActivity}
        onCancel={closeStaticFitnessScreenHandler}
        studentInfoModeHandler={props.studentInfoModeHandler}
        studentList={props.studentList}
        student={props.currentStudent}
        setCurrentStudent={props.setCurrentStudent}
        saveStudent={props.saveStudent}
        curlUpsMode={curlUpsMode}
        pullUpsMode={pullUpsMode}
        pushUpsMode={pushUpsMode}
        sitAndReachMode={sitAndReachMode}
        timerRef={timerRef}
      />
      <TimerFitnessScreen
        visible={timerFitnessScreenMode}
        title={currentActivity}
        onCancel={closeTimerFitnessScreenHandler}
        studentInfoModeHandler={props.studentInfoModeHandler}
        studentList={props.studentList}
        student={props.currentStudent}
        setCurrentStudent={props.setCurrentStudent}
        saveStudent={props.saveStudent}
        mileMode={mileMode}
        shuttleMode={shuttleMode}
        flexedArmHangMode={flexedArmHangMode}
        stopwatchRef={stopwatchRef}
        ref={timerScreenRef}
      />
    </>
  ) : null;

  return (
    <View style={styles.screen}>
      {content}
      <Header title="Activities" />
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
    bottom: -20,
    height: 400,
    width: 300,
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
    marginHorizontal: 15,
    padding: 10,
  },
});

export default FitnessTestScreen;
