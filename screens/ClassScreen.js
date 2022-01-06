import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { auth, database } from "../firebase";

import CustomButton from "../components/CustomButton";
import Class from "../components/Class";
import ClassList from "../components/ClassList";
import backgroundImage from "../assets/santa.png";

const ClassScreen = () => {
  const [list, setList] = useState([]);

  const navigation = useNavigation();

  const signOutHandler = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  // TODO: improve efficiency so entire roster isn't remade
  const createList = (data) => {
    let newList = [];

    if (data != null) {
      for (const [key, value] of Object.entries(data)) {
        let numStudents = value.students ? Object.entries(value.students).length : 0;
        let newClass = (
          <Class id={key} size={numStudents} created={value.created} name={value.name} />
        );
        newList.push(newClass);
      }
    }

    return newList;
  };

  useEffect(() => {
    // listen for changes to this users' classes in the database
    const dbRef = database.ref("users/" + auth.currentUser.uid + "/classes");
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      console.log("listened");
      let newList = createList(data);
      setList(newList);
    });
  }, []);

  return (
    <View style={styles.screen}>
      <ClassList list={list} />
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <View style={styles.buttonContainer}>
        <CustomButton
          title="New Class"
          onPress={() => {
            navigation.navigate("AddClass");
          }}
        />
        <CustomButton title="Sign Out" onPress={signOutHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },

  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    opacity: 0.2,
    zIndex: -1,
  },

  buttonContainer: {
    width: "100%",
    height: "15%",
    paddingHorizontal: "5%",
    paddingVertical: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
});

export default ClassScreen;
