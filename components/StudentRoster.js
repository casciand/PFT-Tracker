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

  for (let i = 0; i < props.students.length; ++i) {
    students.push(
      <Student
        key={props.students[i].key}
        firstName={props.students[i].firstName}
        lastName={props.students[i].lastName}
        age={props.students[i].age}
        gender={props.students[i].gender}
        curlUps={props.students[i].curlUps}
        pullUps={props.students[i].pullUps}
        pushUps={props.students[i].pushUps}
        mile={props.students[i].mile}
        shuttle={props.students[i].shuttle}
        sitAndReach={props.students[i].sitAndReach}
        passedPresidential={props.students[i].passedPresidential}
        passedNational={props.students[i].passedNational}
        curlUpsMode={props.curlUpsMode}
        pullUpsMode={props.pullUpsMode}
        pushUpsMode={props.pushUpsMode}
        sitAndReachMode={props.sitAndReachMode}
        mileMode={props.mileMode}
        shuttleMode={props.shuttleMode}
        onPress={props.onPress.bind(this, props.students[i].key)}
      />
    );
  }

  insertionSort(students);

  let rosterStyle = styles.staticStyle;

  if (props.mileMode || props.shuttleMode) {
    rosterStyle = styles.timerStyle;
  }

  return (
    <ScrollView contentContainerStyle={rosterStyle} indicatorStyle="black">
      {students}
    </ScrollView>
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
