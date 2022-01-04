import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/core';
import { auth, database } from "../firebase";

import StudentRoster from "../components/StudentRoster";
import Student from "../components/Student";
import plusSign from "../assets/plussign.png";
import rosterArt from "../assets/rosterback.png";
import CustomButton from "../components/CustomButton";

const RosterScreen = ({ route }) => {
  const navigation = useNavigation();

  let roster = [];

  // TODO: improve efficiency so entire roster isn't remade
  const createRoster = (data) => {
    roster = [];

    for (const [key, value] of Object.entries(data)) {
      const newStudent = <Student id={key} firstName={value.firstName} lastName={value.lastName} />;
      roster.push(newStudent);
    }
  };

  // listen for changes to this users' students in the database
  const dbRef = database.ref('users/' + auth.currentUser.uid + '/students');
  dbRef.on('value', (snapshot) => {
    const data = snapshot.val();
    createRoster(data);
  });

  // useEffect(() => {
  //   const dbRef = database.ref();
  //   dbRef.child("users").child(auth.currentUser.uid).child("students").get().then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log("found");
  //       createRoster(snapshot.val());
  //     } else {
  //       console.log("No data available");
  //     }
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // }, [])

  return (
    <View style={styles.screen}>
      <View style={styles.roster}>
        <StudentRoster
          students={roster}
        />
      </View>
      <CustomButton
          title="To Fitness Page"
          onPress={() => {navigation.navigate("Fitness", {
            roster: roster
          })}}
        />
        <CustomButton
          title="New Student"
          onPress={() => navigation.navigate("AddStudent")}
        />
      <View style={{ alignItems: "center", zIndex: -1 }}>
        <Image source={rosterArt} style={styles.backgroundImage} />
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
    bottom: 40,
    height: 400,
    width: 400,
    opacity: 0.4,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  roster: {
    height: "77.9%",
    padding: 5,
    top: -4.3,
  },
});

export default RosterScreen;
