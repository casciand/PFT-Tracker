import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

import fonts from "../constants/fonts";

const Student = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.student}>
        <Text style={styles.name}>
          {props.name} ( {props.gender}, {props.age} )
        </Text>
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
  },

  name: {
    fontFamily: fonts.secondary,
  },
});

export default Student;
