import React from "react";
import { View, StyleSheet } from "react-native";

import ImageButton from "./ImageButton";

import Colors from "../constants/colors";
import Fonts from "../constants/fonts";

import rosterBAW from "../assets/rosterBAW.png";
import rosterG from "../assets/rosterG.png";
import fitnessBAW from "../assets/fitnessBAW.png";
import fitnessG from "../assets/fitnessG.png";

const Navigator = (props) => {
  let rosterImage, fitnessImage;
  let rosterTitle, fitnessTitle;

  if (props.rosterMode) {
    rosterImage = rosterG;
    rosterTitle = styles.greenTitle;
    fitnessImage = fitnessBAW;
    fitnessTitle = styles.blackTitle;
  } else {
    rosterImage = rosterBAW;
    rosterTitle = styles.blackTitle;
    fitnessImage = fitnessG;
    fitnessTitle = styles.greenTitle;
  }

  return (
    <View style={styles.navBar}>
      <View style={styles.buttonContainer}>
        <ImageButton
          title="Roster"
          source={rosterImage}
          textStyle={rosterTitle}
          onPress={props.onPressRoster}
        />
        <ImageButton
          title="Activities"
          source={fitnessImage}
          textStyle={fitnessTitle}
          onPress={props.onPressFitness}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },

  buttonContainer: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },

  blackTitle: {
    fontSize: 10,
    fontFamily: Fonts.primary,
    color: "black",
  },

  greenTitle: {
    fontSize: 10,
    fontFamily: Fonts.primary,
    color: Colors.colors.primary,
  },
});

export default Navigator;
