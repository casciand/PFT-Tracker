import React from "react";
import { View, StyleSheet } from "react-native";

import ImageButton from "./ImageButton";

import roster from "../assets/roster.jpg";
import fitness from "../assets/fitness.jpg";

import Colors from "../constants/colors";
import Fonts from "../constants/fonts";

const Navigator = (props) => {
  let rosterOpacity, fitnessOpacity;

  if (props.rosterMode) {
    rosterOpacity = 0.4;
    fitnessOpacity = 1;
  } else {
    rosterOpacity = 1;
    fitnessOpacity = 0.4;
  }

  return (
    <View style={styles.navBar}>
      <View style={styles.buttonContainer}>
        <ImageButton
          title="Roster"
          source={roster}
          textStyle={{ ...styles.navTitle, opacity: rosterOpacity }}
          imageStyle={{ opacity: rosterOpacity }}
          onPress={props.onPressRoster}
        />
        <ImageButton
          title="Fitness Tests"
          source={fitness}
          textStyle={{ ...styles.navTitle, opacity: fitnessOpacity }}
          imageStyle={{ opacity: fitnessOpacity }}
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
    height: "100%",
  },

  buttonContainer: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },

  navTitle: {
    fontSize: 10,
    fontFamily: Fonts.primary,
    color: Colors.colors.primary,
  },
});

export default Navigator;
