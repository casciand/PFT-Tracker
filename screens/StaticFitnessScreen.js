import React, { useState } from "react";
import { View, StyleSheet, Modal, Image } from "react-native";

import AddStaticResultScreen from "./AddStaticResultScreen";

import Header from "../components/Header";
import StudentRoster from "../components/StudentRoster";
import Timer from "../components/Timer";

import Colors from "../constants/colors";

import backArrow from "../assets/backarrow.png";
import staticArt from "../assets/staticback.png";

const StaticFitnessScreen = (props) => {
  const [staticResultScreenMode, setStaticResultScreenMode] = useState(false);

  const [csecs, setCsecs] = useState(6000);

  const staticResultScreenHandler = (studentID) => {
    for (let i = 0; i < props.studentList.length; ++i) {
      if (studentID == props.studentList[i].key) {
        props.setCurrentStudent(props.studentList[i]);
        setStaticResultScreenMode(true);
        return;
      }
    }
  };

  let timer, rosterStyle, imageStyle;

  if (props.curlUpsMode) {
    timer = (
      <View style={styles.timerView}>
        <Timer ref={props.timerRef} csecs={csecs} setCsecs={setCsecs} />
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
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.screen}>
        <Header
          title={props.title}
          imageSource={backArrow}
          onPress={props.onCancel}
        />
        <AddStaticResultScreen
          visible={staticResultScreenMode}
          setStaticResultScreen={setStaticResultScreenMode}
          student={props.student}
          title={`${props.student.lastName}, ${props.student.firstName}`}
          curlUpsMode={props.curlUpsMode}
          pullUpsMode={props.pullUpsMode}
          pushUpsMode={props.pushUpsMode}
          sitAndReachMode={props.sitAndReachMode}
          flexedArmHangMode={props.flexedArmHangMode}
          saveStudent={props.saveStudent}
          setScore={() => setStaticResultScreenMode(false)}
          onCancel={() => setStaticResultScreenMode(false)}
        />
        {timer}
        <View style={rosterStyle}>
          <StudentRoster
            studentList={props.studentList}
            onPress={staticResultScreenHandler}
            curlUpsMode={props.curlUpsMode}
            pullUpsMode={props.pullUpsMode}
            pushUpsMode={props.pushUpsMode}
            sitAndReachMode={props.sitAndReachMode}
            flexedArmHangMode={props.flexedArmHangMode}
          />
        </View>
        <View style={{ ...imageStyle, alignItems: "center", zIndex: -1 }}>
          <Image source={staticArt} style={styles.backgroundImage} />
        </View>
      </View>
    </Modal>
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
