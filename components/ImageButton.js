import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import Fonts from "../constants/fonts";

const ImageButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image
        source={props.source}
        style={{ ...styles.image, ...props.imageStyle }}
      />
      <View style={styles.view}>
        <Text style={{ ...styles.text, ...props.textStyle }}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },

  touchable: {
    alignItems: "center",
    justifyContent: "space-between",
  },

  text: {
    fontSize: 8,
    textAlign: "center",
    bottom: 5,
    fontFamily: Fonts.secondary,
  },
});

export default ImageButton;
