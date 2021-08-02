import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Fonts from "../constants/fonts";
import Colors from "../constants/colors";

import ImageButton from "./ImageButton";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={{ ...styles.headerTitle, ...props.style }}>
        {props.title}
      </Text>
      <View style={styles.button}>
        <ImageButton
          title=""
          source={props.imageSource}
          onPress={props.onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    width: "100%",
    height: 90,
    paddingTop: 36,
    paddingLeft: 25,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: Colors.colors.primary,
    fontSize: 30,
    fontFamily: Fonts.primary,
    width: "80%",
  },

  button: {
    right: 15,
    top: 8,
  },
});

export default Header;
