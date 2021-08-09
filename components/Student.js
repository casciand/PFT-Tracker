import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Fonts from "../constants/fonts";
import Colors from "../constants/colors";

const Student = (props) => {
  let moreInfo;

  if (props.curlUpsMode) {
    if (props.curlUps) {
      moreInfo = `Attempts: ${props.curlUps.length}`;
    } else {
      moreInfo = "Incomplete";
    }
  } else if (props.pullUpsMode) {
    if (props.pullUps) {
      moreInfo = `Attempts: ${props.pullUps.length}`;
    } else {
      moreInfo = "Incomplete";
    }
  } else if (props.pushUpsMode) {
    if (props.pushUps) {
      moreInfo = `Attempts: ${props.pushUps.length}`;
    } else {
      moreInfo = "Incomplete";
    }
  } else if (props.mileMode) {
    moreInfo = props.lapCount == 0 ? "" : " ";

    for (let i = 0; i < props.lapCount; ++i) {
      moreInfo += "✓";
    }
  } else if (props.sitAndReachMode) {
    if (props.sitAndReach) {
      moreInfo = `Attempts: ${props.sitAndReach.length}`;
    } else {
      moreInfo = "Incomplete";
    }
  } else {
    moreInfo = "";
  }

  let additionalText = <Text style={styles.name}>{moreInfo}</Text>;

  let studentStyle = styles.studentStatic;

  if (props.mileMode || props.shuttleMode) {
    studentStyle = styles.studentTimer;
  }

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={studentStyle}>
        <Text style={styles.name}>
          {props.lastName}, {props.firstName}
        </Text>
        {additionalText}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  studentStatic: {
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

  studentTimer: {
    padding: 10,
    margin: 2,
    height: 40,
    backgroundColor: Colors.colors.primary,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
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
