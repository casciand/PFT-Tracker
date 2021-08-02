import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

import fonts from "../constants/fonts";
import colors from "../constants/colors";

const Student = (props) => {
  const formatTime = (time) => {
    let minutes = `0${Math.floor(time / 60)}`.slice(-2);
    let seconds = `0${time % 60}`.slice(-2);

    return `${minutes}:${seconds}`;
  };

  let moreInfo;

  if (props.curlUpsMode) {
    if (props.curlUps) {
      moreInfo = <Text style={styles.name}>Score: {props.curlUps}</Text>;
    } else {
      moreInfo = <Text style={styles.name}>Incomplete</Text>;
    }
  } else if (props.pullUpsMode) {
    if (props.pullUps) {
      moreInfo = <Text style={styles.name}>Score: {props.pullUps}</Text>;
    } else {
      moreInfo = <Text style={styles.name}>Incomplete</Text>;
    }
  } else if (props.sitAndReachMode) {
    if (props.sitAndReach) {
      moreInfo = (
        <Text style={styles.name}>Length: {props.sitAndReach} cm</Text>
      );
    } else {
      moreInfo = <Text style={styles.name}>Incomplete</Text>;
    }
  } else if (props.mileMode) {
    if (props.mile) {
      moreInfo = (
        <Text style={styles.name}>Time: {formatTime(props.mile)}</Text>
      );
    } else {
      moreInfo = <Text style={styles.name}>Incomplete</Text>;
    }
  } else if (props.shuttleMode) {
    if (props.shuttle) {
      moreInfo = (
        <Text style={styles.name}>Time: {formatTime(props.shuttle)}</Text>
      );
    } else {
      moreInfo = <Text style={styles.name}>Incomplete</Text>;
    }
  } else {
    moreInfo = <Text style={styles.name}></Text>;
  }

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.student}>
        <Text style={styles.name}>
          {props.lastName}, {props.firstName}
        </Text>
        {moreInfo}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  student: {
    padding: 10,
    margin: 2,
    height: 40,
    backgroundColor: colors.primary,
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
    fontFamily: fonts.secondary,
    color: "white",
  },
});

export default Student;
