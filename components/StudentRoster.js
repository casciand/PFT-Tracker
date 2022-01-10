import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const StudentRoster = (props) => {
  props.students.sort((a, b) => {
    return a.props.lastName.toLowerCase() < b.props.lastName.toLowerCase() ? -1 : 1;
  });

  let rosterStyle = props.multipleCol ? styles.timerStyle : styles.staticStyle;

  return <ScrollView contentContainerStyle={rosterStyle}>{props.students}</ScrollView>;
};

const styles = StyleSheet.create({
  staticStyle: {
    padding: "3%",
  },

  timerStyle: {
    padding: "3%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default StudentRoster;
