import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/core';

import Fonts from "../constants/fonts";
import Colors from "../constants/colors";

const Student = (props) => {
  const navigation = useNavigation();

  const handleTimerResult = () => {
    const state = navigation.getState();
    const mile = state.routes[state.index].params.mile;
    const shuttle = state.routes[state.index].params.shuttle;
    const armHang = state.routes[state.index].params.armHang;

    if (mile) {

    } else if (shuttle) {

    }
  };

  const handleOnPress = () => {
    const state = navigation.getState();
    const currentPage = state.routes[state.index].name;
    
    if (currentPage == "Roster") {
      navigation.navigate("InfoStudent", {
        id: props.id
      });
    } else if (currentPage == "Static") {
      navigation.navigate("AddStatic", {
        id: props.id
      });
    } else if (currentPage == "AddStatic") {
      handleStaticResult();
    } else { // timer screen
      handleTimerResult();
    }
  };

  let checks;

  if (props.mileMode) {
    checks = props.lapCount == 0 ? "" : " ";

    for (let i = 0; i < props.lapCount; ++i) {
      checks += "✓";
    }
  } else {
    checks = "";
  }

  let additionalText = <Text style={styles.name}>{checks}</Text>;

  return (
    <TouchableOpacity onPress={() => handleOnPress()}>
      <View style={styles.student}>
        <Text style={styles.name}>
          {props.lastName}, {props.firstName}
        </Text>
        {additionalText}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  student: {
    padding: 10,
    margin: 2,
    height: 40,
    backgroundColor: Colors.colors.primary,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.24,
    elevation: 5,
  },

  name: {
    fontFamily: Fonts.secondary,
    color: "white",
  },
});

export default Student;
