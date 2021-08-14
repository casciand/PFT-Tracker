import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Fonts from "../constants/fonts";
import Colors from "../constants/colors";

const Student = (props) => {
  let moreInfo;

  if (props.curlUpsMode) {
    moreInfo = `Attempts: ${props.curlUps.length}`;
  } else if (props.pullUpsMode) {
    moreInfo = `Attempts: ${props.pullUps.length}`;
  } else if (props.pushUpsMode) {
    moreInfo = `Attempts: ${props.pushUps.length}`;
  } else if (props.sitAndReachMode) {
    moreInfo = `Attempts: ${props.sitAndReach.length}`;
  } else if (props.mileMode) {
    moreInfo = props.lapCount == 0 ? "" : " ";

    for (let i = 0; i < props.lapCount; ++i) {
      moreInfo += "✓";
    }
  } else {
    moreInfo = "";
  }

  let additionalText = <Text style={styles.name}>{moreInfo}</Text>;

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.student}>
        <Text style={styles.name}>
          {props.lastName}, {props.firstName}
        </Text>
        {additionalText}
      </View>
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
