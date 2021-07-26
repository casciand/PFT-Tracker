import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

import fonts from "../constants/fonts";

const Student = (props) => {
  let moreInfo;

  if (props.curlUpsMode) {
    moreInfo = <Text style={styles.name}>Score: {props.curlUps}</Text>;
  } else if (props.pullUpsMode) {
    moreInfo = <Text style={styles.name}>Score: {props.pullUps}</Text>;
  } else if (props.sitAndReachMode) {
    moreInfo = <Text style={styles.name}>Score: {props.sitAndReach}</Text>;
  } else if (props.mileMode) {
    moreInfo = <Text style={styles.name}>Time: {props.mile}</Text>;
  } else if (props.shuttleMode) {
    moreInfo = <Text style={styles.name}>Time: {props.shuttle}</Text>;
  } else {
    moreInfo = <Text style={styles.name}>{props.age}</Text>;
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
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  name: {
    fontFamily: fonts.secondary,
  },
});

export default Student;
