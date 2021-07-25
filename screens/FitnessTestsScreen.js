import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Header from "../components/Header";
import Navigator from "../components/Navigator";

const FitnessTestScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View>
        <Header title="Fitness Tests" />
      </View>
      <Text>Fitness Tests Here.</Text>
      <View style={styles.footer}>
        <Navigator onPressRoster={() => {}} onPressFitness={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    position: "absolute",
    bottom: -5,
    width: "100%",
    height: "11%",
    flex: 1,
    zIndex: 1,
  },
});

export default FitnessTestScreen;
