import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const ClassList = (props) => {
  return <ScrollView contentContainerStyle={styles.list}>{props.list}</ScrollView>;
};

const styles = StyleSheet.create({
  list: {
    padding: 15,
    alignItems: "center",
  },
});

export default ClassList;
