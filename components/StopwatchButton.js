import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import fonts from "../constants/fonts";
import colors from "../constants/colors";

const StopwatchButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.border}>
        <View style={styles.view}>
          <Text style={{ ...styles.text, ...props.textStyle }} allowFontScaling={false}>
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
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 100,
    width: 60,
    height: 60,
  },

  border: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 100,
    width: 65,
    height: 65,
  },

  text: {
    padding: 10,
    fontSize: 12,
    textAlign: "center",
    fontFamily: fonts.secondary,
    color: colors.primary,
  },
});

export default StopwatchButton;
