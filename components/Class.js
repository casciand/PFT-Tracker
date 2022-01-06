import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

import Fonts from "../constants/fonts";
import Colors from "../constants/colors";

const Class = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.class}
      onPress={() => {
        navigation.navigate("Roster", {
          classID: props.id,
        });
      }}
    >
      <Text style={styles.title}>{props.name}</Text>
      <View style={styles.info}>
        <Text style={styles.subtitle}>Created: {props.created}</Text>
        <Text style={styles.subtitle}>Students: {props.size}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  class: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 10,
    height: 60,
    width: "100%",
    backgroundColor: Colors.colors.primary,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "space-between",
    flexDirection: "column",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.24,
    elevation: 5,
  },

  info: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  title: {
    fontFamily: Fonts.primary,
    fontSize: 20,
    color: "white",
  },

  subtitle: {
    fontFamily: Fonts.secondary,
    fontSize: 12,
    color: "white",
  },
});

export default Class;
