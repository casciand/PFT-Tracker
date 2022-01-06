import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import uuid from "react-native-uuid";
import { useNavigation } from '@react-navigation/core';
import { auth, database } from "../firebase";

import Fonts from "../constants/fonts";
import Colors from "../constants/colors";
import FormatTimeFunctions from "../functions/FormatTimeFunctions";

const Student = (props) => {
  const [checks, setChecks] = useState(" ");
  const [disabled, setDisabled] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const navigation = useNavigation();

  const disablePress = () => {
    setDisabled(true);
    setOpacity(.2);
  };

  const handleMilePress = (time) => {
    if (checks.length < 4) {
      setChecks((curr) => curr + "✓");
    } else {
      database.ref('users/' + auth.currentUser.uid + "/students/" + props.id + "/mile/" + uuid.v1()).set({
        date: FormatTimeFunctions.formatDate(),
        score: time
      });

      disablePress();
    }
  };

  const handleTimerResult = () => {
    const state = navigation.getState();

    const mile = state.routes[state.index].params.mile;
    const shuttle = state.routes[state.index].params.shuttle;
    // const armHang = state.routes[state.index].params.armHang;

    const stopwatchRef = state.routes[state.index].params.stopwatchRef;
    let stopwatchTime = stopwatchRef.current.csecs / 100;

    if (mile) {
      handleMilePress(stopwatchTime);
    } else {
      database.ref('users/' + auth.currentUser.uid + "/students/" + props.id + `/${shuttle ? "shuttle" : "armHang"}/` + uuid.v1()).set({
        date: FormatTimeFunctions.formatDate(),
        score: stopwatchTime
      });

      disablePress();
    }
  };

  const handleStaticResult = () => {
    const state = navigation.getState();
    
    const curlUps = state.routes[state.index].params.curlUps;
    const pullUps = state.routes[state.index].params.pullUps;
    const pushUps = state.routes[state.index].params.pushUps;
    const sitAndReach = state.routes[state.index].params.sitAndReach;

    navigation.navigate("AddStatic", {
      id: props.id,
      curlUps: curlUps,
      pullUps: pullUps,
      pushUps: pushUps,
      sitAndReach: sitAndReach
    });
  };

  const handleOnPress = () => {
    const state = navigation.getState();
    const currentPage = state.routes[state.index].name;

    if (currentPage == "Roster") {
      navigation.navigate("InfoStudent", {
        id: props.id
      });
    } else if (currentPage == "Static") {
      handleStaticResult();
    } else if (currentPage == "Timer") {
      handleTimerResult();
    }
  };

  let nameFormat = (
    <Text style={styles.name}>
      {props.lastName}, {props.firstName}
    </Text>
  );

  let style = styles.student;

  if (props.multipleCol) {
    nameFormat = (
      <Text style={styles.name}>
        {props.firstName} {props.lastName.charAt(0)}.
      </Text>
    );

    style = {...styles.student, opacity: opacity, width: "45%"}
  }

  return (
    <TouchableOpacity style={style} disabled={disabled} onPress={() => handleOnPress()}>
        {nameFormat}
        <Text style={styles.name}>{checks}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  student: {
    padding: 10,
    margin: 2,
    height: 40,
    backgroundColor: Colors.colors.primary,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.24,
    elevation: 5,
  },

  name: {
    fontFamily: Fonts.secondary,
    color: "white",
  },
});

export default Student;
