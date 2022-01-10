import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./screens/LoginScreen";
import ClassScreen from "./screens/ClassScreen";
import RosterScreen from "./screens/RosterScreen";
import FitnessTestsScreen from "./screens/FitnessTestsScreen";
import StudentInfoScreen from "./screens/StudentInfoScreen";
import StaticFitnessScreen from "./screens/StaticFitnessScreen";
import TimerFitnessScreen from "./screens/TimerFitnessScreen";
import AddClassScreen from "./screens/AddClassScreen";
import AddStudentScreen from "./screens/AddStudentScreen";
import AddStaticResultScreen from "./screens/AddStaticResultScreen";

import Colors from "./constants/colors";
import Fonts from "./constants/fonts";

const App = () => {
  const Stack = createNativeStackNavigator();

  const getStaticTitle = (params) => {
    if (params.curlUps) {
      return "Curl-Ups";
    } else if (params.sitAndReach) {
      return "Sit & Reach";
    } else if (params.pushUps) {
      return "Push-Ups";
    } else if (params.pullUps) {
      return "Pull-Ups";
    } else if (params.armHang) {
      return "Arm Hang";
    } else if (params.mile) {
      return "Mile Run";
    } else {
      return "Shuttle Run";
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: styles.header }} initialRoute="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Class" component={ClassScreen} options={{title: "Classes"}} />
        <Stack.Screen name="Roster" component={RosterScreen} />
        <Stack.Screen name="Fitness" component={FitnessTestsScreen} options={{title: "Activities"}} />
        <Stack.Screen name="InfoStudent" component={StudentInfoScreen} options={{title: "Student Information"}} />
        <Stack.Screen name="Static" component={StaticFitnessScreen} options={({ route }) => ({ title: getStaticTitle(route.params) })} />
        <Stack.Screen name="Timer" component={TimerFitnessScreen} options={({ route }) => ({ title: getStaticTitle(route.params) })} />
        <Stack.Screen name="AddStudent" component={AddStudentScreen} options={{title: "Add Student"}} />
        <Stack.Screen name="AddClass" component={AddClassScreen} options={{title: "Add Class"}} />
        <Stack.Screen name="AddStatic" component={AddStaticResultScreen} options={{title: "Add Result"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    width: "100%",
    height: 120,
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

  navigator: {
    height: "10%",
    width: "100%",
    bottom: 0,
    position: "absolute",
  },
});

export default App;
