import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

import Fonts from "../constants/fonts";
import Colors from "../constants/colors";

const Student = (props) => {
  const formatTime = (time) => {
    const csecs = time * 100;

    const msecs = `0${csecs % 100}`.slice(-2);
    const seconds = `0${Math.floor(csecs / 100) % 60}`.slice(-2);
    const minutes = `0${Math.floor(csecs / 100 / 60)}`.slice(-2);

    return `${minutes}:${seconds}.${msecs}`;
  };

  let moreInfo;

  if (props.curlUpsMode) {
    if (props.curlUps) {
      moreInfo = <Text style={styles.name}>{props.curlUps}</Text>;
    } else {
      moreInfo = <Text style={styles.name}>Incomplete</Text>;
    }
  } else if (props.pullUpsMode) {
    if (props.pullUps) {
      moreInfo = <Text style={styles.name}>{props.pullUps}</Text>;
    } else {
      moreInfo = <Text style={styles.name}>Incomplete</Text>;
    }
  } else if (props.sitAndReachMode) {
    if (props.sitAndReach) {
      moreInfo = <Text style={styles.name}>{props.sitAndReach} cm</Text>;
    } else {
      moreInfo = <Text style={styles.name}>Incomplete</Text>;
    }
  } else if (props.mileMode) {
    if (props.mile) {
      moreInfo = <Text style={styles.name}>{formatTime(props.mile)}</Text>;
    } else {
      moreInfo = <Text style={styles.name}>Incomplete</Text>;
    }
  } else if (props.shuttleMode) {
    if (props.shuttle) {
      moreInfo = <Text style={styles.name}>{props.shuttle} s</Text>;
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
