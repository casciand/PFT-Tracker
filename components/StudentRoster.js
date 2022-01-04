import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import Student from "./Student";

const StudentRoster = (props) => {
  const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; ++i) {
      let j = i;

      while (j > 0 && arr[j].props.lastName < arr[j - 1].props.lastName) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        --j;
      }
    }
  };

  // insertionSort(students);

  // let rosterStyle =
  //   props.mileMode || props.shuttleMode || props.flexedArmHangMode
  //     ? styles.timerStyle
  //     : styles.staticStyle;

  return (
    <ScrollView>{props.students}</ScrollView>
  );
};

const styles = StyleSheet.create({
  staticStyle: {
    padding: 15,
  },

  timerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StudentRoster;
