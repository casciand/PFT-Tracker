import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";

import Student from "./Student";

const StudentRoster = (props) => {
  let students = [];

  for (let i = 0; i < props.students.length; ++i) {
    students.push(
      <Student
        name={props.students[i].name}
        age={props.students[i].age}
        gender={props.students[i].gender}
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
