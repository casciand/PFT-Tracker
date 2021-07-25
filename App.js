import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import RosterScreen from "./screens/RosterScreen";
import FitnessTestsScreen from "./screens/FitnessTestsScreen";

export default function App() {
  const [rosterMode, setRosterMode] = useState(true);

  let content = <RosterScreen />;

  // if (!rosterMode) {
  //   content = <FitnessTestsScreen />;
  // }

  return (
    <View style={styles.container}>
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
