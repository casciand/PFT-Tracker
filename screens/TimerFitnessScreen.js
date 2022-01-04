import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Image } from "react-native";
import { auth, database } from "../firebase";

import StudentRoster from "../components/StudentRoster";
import Student from "../components/Student";
import Stopwatch from "../components/Stopwatch";
import FormatTimeFunctions from "../functions/FormatTimeFunctions";
import Colors from "../constants/colors";
import timerArt from "../assets/timerfitness.png";

const TimerFitnessScreen = ({ route }) => {
  const [roster, setRoster] = useState([]);
  const [csecs, setCsecs] = useState(0);
  
  // dummy state to force certain re-renders
  const [, setDummyValue] = useState(false);

  const stopwatchRef = useRef();

  const { mileMode, studentIDs } = route.params;

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

  // const forceUpdate = () => {
  //   setDummyValue((val) => !val);
  // };

  // useImperativeHandle(ref, () => ({
  //   resetCurrentList: () => {
  //     setCurrentList(props.studentList);
  //   },
  // }));

  // const setTimerScoreHandler = (studentID) => {
  //   const currentSeconds = csecs / 100;

  //   let currentStudent;

  //   for (let i = 0; i < props.studentList.length; ++i) {
  //     currentStudent = props.studentList[i];

  //     if (studentID == currentStudent.key) {
  //       break;
  //     }
  //   }

  //   let entry = {
  //     key: uuid.v1(),
  //     date: FormatTimeFunctions.formatDate(),
  //     value: currentSeconds,
  //   };

  //   if (props.mileMode) {
  //     currentStudent.mile.push(entry);
  //   } else if (props.shuttleMode) {
  //     currentStudent.shuttle.push(entry);
  //   } else {
  //     currentStudent.flexedArmHang.push(entry);
  //   }

  //   forceUpdate();
  // };

  // const onPressStudent = (studentID) => {
  //   if (csecs == 0) {
  //     return;
  //   }

  //   let student;

  //   for (let i = 0; i < props.studentList.length; ++i) {
  //     student = props.studentList[i];

  //     if (studentID == student.key) {
  //       break;
  //     }
  //   }

  //   if (props.mileMode) {
  //     if (student.lapCount < 3) {
  //       student.lapCount += 1;
  //       forceUpdate();
  //       return;
  //     }
  //   }

  //   setTimerScoreHandler(studentID);
  //   setCurrentList((list) => {
  //     return list.filter((student) => student.key != studentID);
  //   });
  // };

  return (
    <View style={styles.screen}>
      <View style={styles.stopwatchView}>
        <Stopwatch
          csecs={csecs}
          setCsecs={setCsecs}
          format={FormatTimeFunctions.formatTimeMinutes}
          // ref={stopwatchRef} 
        />
      </View>
      <View style={styles.roster}>
        <StudentRoster
          students={roster}
        />
      </View>
      <View style={{ alignItems: "center", zIndex: -1 }}>
          <Image source={timerArt} style={styles.backgroundImage} />
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
    bottom: 20,
    height: 280,
    width: 280,
    opacity: 0.4,
  },

  stopwatchView: {
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

  roster: {
    height: "90%",
    padding: 5,
  },
});

export default TimerFitnessScreen;
