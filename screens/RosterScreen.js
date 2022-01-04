import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/core';
import { auth, database } from "../firebase";

import StudentRoster from "../components/StudentRoster";
import Student from "../components/Student";
import rosterArt from "../assets/rosterback.png";
import CustomButton from "../components/CustomButton";

const RosterScreen = () => {
  const [roster, setRoster] = useState([]);
  const [studentIDs, setStudentIDs] = useState([]);

  const navigation = useNavigation();

  // TODO: improve efficiency so entire roster isn't remade
  const createRoster = (data) => {
    let newRoster = [];
    let newIDs = [];

    if (data != null) {
      for (const [key, value] of Object.entries(data)) {
        let newStudent = <Student id={key} firstName={value.firstName} lastName={value.lastName} />;
        newRoster.push(newStudent);
        newIDs.push(key);
      }

      return { newRoster, newIDs };
    }
  };

  useEffect(() => {
    // listen for changes to this users' students in the database
    const dbRef = database.ref('users/' + auth.currentUser.uid + '/students');
    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log("listened");
      let { newRoster, newIDs } = createRoster(data);
      setRoster(newRoster);
      setStudentIDs(newIDs);
    });
  }, [])

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
            studentIDs: studentIDs // pass IDs to avoid passing components
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
