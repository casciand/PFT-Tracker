import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Image } from "react-native";
import { auth, database } from "../firebase";

import StudentRoster from "../components/StudentRoster";
import Student from "../components/Student";
import Timer from "../components/Timer";
import Colors from "../constants/colors";
import staticArt from "../assets/staticback.png";

const StaticFitnessScreen = ({ route }) => {
  const [csecs, setCsecs] = useState(6000);
  const [roster, setRoster] = useState([]);

  const timersRef = useRef();

  const { studentIDs, curlUps } = route.params;

  const createRoster = () => {
    const dbRef = database.ref();

    studentIDs.forEach((id) => {
      dbRef.child("users").child(auth.currentUser.uid).child("students").child(id).get().then((snapshot) => {
        if (snapshot.exists()) {
          const ret = snapshot.val();
          let newStudent = <Student id={id} firstName={ret.firstName} lastName={ret.lastName} />;
          setRoster((currentRoster) => [...currentRoster, newStudent]);
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    });
  };

  // create student roster
  useEffect(() => {
    setRoster([]);
    createRoster();
  }, [])

  let timer, rosterStyle, imageStyle;

  if (curlUps) {
    timer = (
      <View style={styles.timerView}>
        <Timer ref={timersRef} csecs={csecs} setCsecs={setCsecs} />
      </View>
    );
    rosterStyle = { ...styles.roster, height: "53%" };
    imageStyle = { marginTop: 120 };
  } else {
    timer = null;
    rosterStyle = styles.roster;
    imageStyle = {};
  }

  return (
      <View style={styles.screen}>
        {timer}
        <View style={rosterStyle}>
          <StudentRoster
            students={roster}
          />
        </View>
        <View style={{ ...imageStyle, alignItems: "center", zIndex: -1 }}>
          <Image source={staticArt} style={styles.backgroundImage} />
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
    bottom: 150,
    height: 250,
    width: 300,
    opacity: 0.4,
  },

  roster: {
    height: "84.5%",
    padding: 5,
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
