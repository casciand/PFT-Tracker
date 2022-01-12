import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { auth, database } from "../firebase";

import StudentRoster from "../components/StudentRoster";
import Student from "../components/Student";
import Stopwatch from "../components/Stopwatch";
import ft from "../functions/FormatTimeFunctions";
import backgroundImage from "../assets/runner.png";

const TimerFitnessScreen = ({ route }) => {
  const [roster, setRoster] = useState([]);

  const { stopwatchRef, classID, studentIDs } = route.params;

  const createRoster = () => {
    const dbRef = database.ref();

    studentIDs.forEach((id) => {
      dbRef
        .child("users")
        .child(auth.currentUser.uid)
        .child("classes")
        .child(classID)
        .child("students")
        .child(id)
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            const ret = snapshot.val();
            let newStudent = (
              <Student
                classID={classID}
                id={id}
                firstName={ret.firstName}
                lastName={ret.lastName}
                multipleCol={true}
              />
            );
            setRoster((currentRoster) => [...currentRoster, newStudent]);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  // create student roster
  useEffect(() => {
    setRoster([]);
    createRoster();

    // unsubscribe when component unmounts to prevent memory leak
    return () => {
      stopwatchRef.current.resetStopwatchHandler();
    };
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.stopwatchView}>
        <Stopwatch format={ft.formatTimeMinutes} ref={stopwatchRef} />
      </View>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <StudentRoster students={roster} multipleCol={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },

  backgroundImage: {
    marginTop: "40%",
    position: "absolute",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    opacity: 0.2,
    zIndex: -1,
  },

  stopwatchView: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 50,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 5,
  },
});

export default TimerFitnessScreen;
