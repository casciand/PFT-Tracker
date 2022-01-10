import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { auth, database } from "../firebase";

import StudentRoster from "../components/StudentRoster";
import Student from "../components/Student";
import Timer from "../components/Timer";
import Colors from "../constants/colors";
import backgroundImage from "../assets/situp.png";

const StaticFitnessScreen = ({ route }) => {
  const [roster, setRoster] = useState([]);

  const { timerRef, classID, studentIDs, curlUps } = route.params;

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
                id={id}
                classID={classID}
                firstName={ret.firstName}
                lastName={ret.lastName}
                multipleCol={false}
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
      if (curlUps) {
        timerRef.current.resetTimerHandler();
      }
    }
  }, []);

  let timer, imageStyle;

  if (curlUps) {
    timer = (
      <View style={styles.timerView}>
        <Timer ref={timerRef} />
      </View>
    );
    imageStyle = { ...styles.backgroundImage, marginTop: "40%" };
  } else {
    timer = null;
    imageStyle = styles.backgroundImage;
  }

  return (
    <View style={styles.screen}>
      {timer}
      <Image source={backgroundImage} style={imageStyle} />
      <StudentRoster students={roster} multipleCol={false} />
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

  timerView: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 50,
    backgroundColor: Colors.colors.background,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 5,
  },
});

export default StaticFitnessScreen;
