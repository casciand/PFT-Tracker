import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { auth, database } from "../firebase";

import StudentRoster from "../components/StudentRoster";
import Student from "../components/Student";
import CustomButton from "../components/CustomButton";
import backgroundImage from "../assets/student.png";

const RosterScreen = ({ route, navigation }) => {
  const [roster, setRoster] = useState([]);
  const [studentIDs, setStudentIDs] = useState([]);

  const { classID } = route.params;

  // TODO: improve efficiency so entire roster isn't remade
  const createRoster = (data) => {
    let newRoster = [];
    let newIDs = [];

    if (data != null) {
      for (const [key, value] of Object.entries(data)) {
        let newStudent = (
          <Student
            classID={classID}
            id={key}
            firstName={value.firstName}
            lastName={value.lastName}
          />
        );
        newRoster.push(newStudent);
        newIDs.push(key);
      }
    }

    return { newRoster, newIDs };
  };

  useEffect(() => {
    // listen for changes to this users' students in the database
    const dbRef = database.ref(`users/${auth.currentUser.uid}/classes/${classID}/students`);
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      let { newRoster, newIDs } = createRoster(data);
      
      setRoster(newRoster);
      setStudentIDs(newIDs);
    });
  }, []);

  return (
    <View style={styles.screen}>
      <StudentRoster students={roster} />
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Activities"
          onPress={() => {
            navigation.navigate("Fitness", {
              classID: classID,
              studentIDs: studentIDs, // pass IDs to avoid passing components
            });
          }}
        />
        <CustomButton
          title="New Student"
          onPress={() =>
            navigation.navigate("AddStudent", {
              classID: classID,
            })
          }
        />
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
    zIndex: -1,
    opacity: 0.2,
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

export default RosterScreen;
