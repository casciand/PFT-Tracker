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

  let students = [];

  for (let i = 0; i < props.studentList.length; ++i) {
    if (props.studentList[i].key != "0") {
      students.push(
        <Student
          // base properties
          key={props.studentList[i].key}
          firstName={props.studentList[i].firstName}
          lastName={props.studentList[i].lastName}
          age={props.studentList[i].age}
          gender={props.studentList[i].gender}
          curlUps={props.studentList[i].curlUps}
          pullUps={props.studentList[i].pullUps}
          pushUps={props.studentList[i].pushUps}
          mile={props.studentList[i].mile}
          shuttle={props.studentList[i].shuttle}
          sitAndReach={props.studentList[i].sitAndReach}
          flexedArmHang={props.studentList[i].flexedArmHang}
          passedPresidential={props.studentList[i].passedPresidential}
          passedNational={props.studentList[i].passedNational}
          lapCount={props.studentList[i].lapCount}
          // current status properties
          onPress={props.onPress.bind(this, props.studentList[i].key)}
          curlUpsMode={props.curlUpsMode}
          pullUpsMode={props.pullUpsMode}
          pushUpsMode={props.pushUpsMode}
          sitAndReachMode={props.sitAndReachMode}
          flexedArmHangMode={props.flexedArmHangMode}
          mileMode={props.mileMode}
          shuttleMode={props.shuttleMode}
        />
      );
    }
  }

  insertionSort(students);

  let rosterStyle =
    props.mileMode || props.shuttleMode || props.flexedArmHangMode
      ? styles.timerStyle
      : styles.staticStyle;

  return (
    <ScrollView contentContainerStyle={rosterStyle}>{students}</ScrollView>
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
