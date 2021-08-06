import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Fonts from "../constants/fonts";

const StopwatchButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.border}>
        <View style={styles.view}>
          <Text style={{ ...styles.text, ...props.textStyle }}>
            {props.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 100,
    width: 60,
    height: 60,
  },

  border: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 100,
    width: 65,
    height: 65,
  },

  text: {
    padding: 10,
    fontSize: 12,
    textAlign: "center",
    fontFamily: Fonts.secondary,
  },
});

export default StopwatchButton;
