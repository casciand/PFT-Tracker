import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";
import Fonts from "../constants/fonts";

const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.border, ...props.borderStyle }}>
        <Text style={{ ...styles.text, ...props.textStyle }}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  border: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderWidth: 0.5,
    backgroundColor: Colors.colors.primary,
    width: 140,
    height: 60,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },

  text: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: Fonts.primary,
    color: Colors.colors.background,
  },
});

export default CustomButton;
