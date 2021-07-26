import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";

import Student from "./Student";

const StudentRoster = (props) => {
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
        mile={props.students[i].mile}
        shuttle={props.students[i].shuttle}
        sitAndReach={props.students[i].sitAndReach}
        curlUpsMode={props.curlUpsMode}
        pullUpsMode={props.pullUpsMode}
        sitAndReachMode={props.sitAndReachMode}
        mileMode={props.mileMode}
        shuttleMode={props.shuttleMode}
        onPress={props.onPress.bind(this, props.students[i].key)}
      />
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      indicatorStyle="black"
    >
      {students}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 15,
  },
});

export default StudentRoster;
