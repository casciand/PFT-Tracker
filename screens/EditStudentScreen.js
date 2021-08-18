import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
import uuid from "react-native-uuid";

import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

import FormatTimeFunctions from "../functions/FormatTimeFunctions";

import Fonts from "../constants/fonts";
import Colors from "../constants/colors";

import backArrow from "../assets/backarrow.png";

const EditStudentScreen = ({ student, ...props }) => {
  const [deleteCurlUpsMode, setDeleteCurlUpsMode] = useState(false);
  const [deleteSitAndReachMode, setDeleteSitAndReachMode] = useState(false);
  const [deletePullUpsMode, setDeletePullUpsMode] = useState(false);
  const [deletePushUpsMode, setDeletePushUpsMode] = useState(false);
  const [deleteFlexedArmHangMode, setDeleteFlexedArmHangMode] = useState(false);
  const [deleteMileMode, setDeleteMileMode] = useState(false);
  const [deleteShuttleMode, setDeleteShuttleMode] = useState(false);

  // dummy state to force certain re-renders
  const [, setDummyValue] = useState(false);

  const forceUpdate = () => {
    setDummyValue((val) => !val);
  };

  // add/delete entry handlers
  const addCurlUpsEntryHandler = () => {
    let entry = {
      key: uuid.v1(),
      date: FormatTimeFunctions.formatDate(),
      value: "Set Score",
    };
    student.curlUps.push(entry);

    forceUpdate();
  };

  const addSitAndReachEntryHandler = () => {
    let entry = {
      key: uuid.v1(),
      date: FormatTimeFunctions.formatDate(),
      value: "Set Score",
    };
    student.sitAndReach.push(entry);

    forceUpdate();
  };

  const addPullUpsEntryHandler = () => {
    let entry = {
      key: uuid.v1(),
      date: FormatTimeFunctions.formatDate(),
      value: "Set Score",
    };
    student.pullUps.push(entry);

    forceUpdate();
  };

  const addPushUpsEntryHandler = () => {
    let entry = {
      key: uuid.v1(),
      date: FormatTimeFunctions.formatDate(),
      value: "Set Score",
    };
    student.pushUps.push(entry);

    forceUpdate();
  };

  const addFlexedArmHangEntryHandler = () => {
    let entry = {
      key: uuid.v1(),
      date: FormatTimeFunctions.formatDate(),
      value: "Set Score",
    };
    student.flexedArmHang.push(entry);

    forceUpdate();
  };

  const addMileEntryHandler = () => {
    let entry = {
      key: uuid.v1(),
      date: FormatTimeFunctions.formatDate(),
      value: "Set Score",
    };
    student.mile.push(entry);

    forceUpdate();
  };

  const addShuttleEntryHandler = () => {
    let entry = {
      key: uuid.v1(),
      date: FormatTimeFunctions.formatDate(),
      value: "Set Score",
    };
    student.shuttle.push(entry);

    forceUpdate();
  };

  const deleteEntryHandler = (entryID) => {
    if (deleteCurlUpsMode) {
      student.curlUps = student.curlUps.filter(
        (entry) => entry.key !== entryID
      );
    } else if (deleteSitAndReachMode) {
      student.sitAndReach = student.sitAndReach.filter(
        (entry) => entry.key !== entryID
      );
    } else if (deletePullUpsMode) {
      student.pullUps = student.pullUps.filter(
        (entry) => entry.key !== entryID
      );
    } else if (deletePushUpsMode) {
      student.pushUps = student.pushUps.filter(
        (entry) => entry.key !== entryID
      );
    } else if (deleteFlexedArmHangMode) {
      student.flexedArmHang = student.flexedArmHang.filter(
        (entry) => entry.key !== entryID
      );
    } else if (deleteMileMode) {
      student.mile = student.mile.filter((entry) => entry.key !== entryID);
    } else if (deleteShuttleMode) {
      student.shuttle = student.shuttle.filter(
        (entry) => entry.key !== entryID
      );
    } else {
      return;
    }

    forceUpdate();
  };

  const resetDeleteModes = () => {
    setDeleteCurlUpsMode(false);
    setDeleteSitAndReachMode(false);
    setDeletePullUpsMode(false);
    setDeletePushUpsMode(false);
    setDeleteFlexedArmHangMode(false);
    setDeleteMileMode(false);
    setDeleteShuttleMode(false);
  };

  const formatScores = (scores, min, sec, cm) => {
    let formattedScores = [];

    for (let i = 0; i < scores.length; ++i) {
      let score = scores[i].value;
      let units = "";

      if (min) {
        score = FormatTimeFunctions.formatTimeMinutes(score);
        units = " s";
      } else if (sec) {
        units = " s";
      } else if (cm) {
        units = " cm";
      }

      // convert test entry to modifiable TextInputs
      const entry = (
        <TouchableOpacity onPress={() => deleteEntryHandler(scores[i].key)}>
          <View style={styles.entry}>
            <TextInput
              style={styles.textBox}
              placeholder={scores[i].date}
              placeholderTextColor="white"
              onChangeText={(input) => {
                scores[i].date = input;
              }}
              maxLength={9}
            />
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.textBox}
                placeholder={scores[i].value.toString()}
                placeholderTextColor="white"
                onChangeText={(input) => {
                  scores[i].value = input;
                }}
                maxLength={3}
                keyboardType={"numeric"}
              />
              <Text style={styles.units}>{units}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );

      formattedScores.push(entry);
    }

    return formattedScores;
  };

  const createInfoBlock = (scores, min = false, sec = false, cm = false) => {
    let contents = <Text style={styles.noEntry}>No Entries</Text>;

    if (scores.length != 0) {
      contents = (
        <ScrollView
          contentContainerStyle={{ padding: 10 }}
          showsVerticalScrollIndicator={false}
        >
          {formatScores(scores, min, sec, cm)}
        </ScrollView>
      );
    }

    return contents;
  };

  // changes `-` button style when pressed
  let curlUpsStyle = styles.editButton;
  let sitAndReachStyle = styles.editButton;
  let pullUpsStyle = styles.editButton;
  let pushUpsStyle = styles.editButton;
  let flexedArmHangStyle = styles.editButton;
  let mileStyle = styles.editButton;
  let shuttleStyle = styles.editButton;

  if (deleteCurlUpsMode) {
    curlUpsStyle = { ...styles.editButton, opacity: 0.4 };
  } else if (deleteSitAndReachMode) {
    sitAndReachStyle = { ...styles.editButton, opacity: 0.4 };
  } else if (deletePullUpsMode) {
    pullUpsStyle = { ...styles.editButton, opacity: 0.4 };
  } else if (deletePushUpsMode) {
    pushUpsStyle = { ...styles.editButton, opacity: 0.4 };
  } else if (deleteFlexedArmHangMode) {
    flexedArmHangStyle = { ...styles.editButton, opacity: 0.4 };
  } else if (deleteMileMode) {
    mileStyle = { ...styles.editButton, opacity: 0.4 };
  } else if (deleteShuttleMode) {
    shuttleStyle = { ...styles.editButton, opacity: 0.4 };
  }

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.screen}>
        <Header
          title="Edit Student"
          imageSource={backArrow}
          onPress={props.onCancel}
        />
        <ScrollView
          contentContainerStyle={styles.information}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.fitnessInfo}>
            <Text style={styles.infoTitle}>Fitness Scores</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Curl-Ups</Text>
                <View style={styles.editButtons}>
                  <CustomButton
                    borderStyle={styles.editButton}
                    title="+"
                    onPress={() => {
                      resetDeleteModes();
                      addCurlUpsEntryHandler();
                    }}
                  />
                  <CustomButton
                    borderStyle={curlUpsStyle}
                    title="-"
                    onPress={() => {
                      if (deleteCurlUpsMode) {
                        setDeleteCurlUpsMode(false);
                      } else {
                        resetDeleteModes();
                        setDeleteCurlUpsMode(true);
                      }
                    }}
                  />
                </View>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(student.curlUps)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Sit & Reach</Text>
                <View style={styles.editButtons}>
                  <CustomButton
                    borderStyle={styles.editButton}
                    title="+"
                    onPress={() => {
                      resetDeleteModes();
                      addSitAndReachEntryHandler();
                    }}
                  />
                  <CustomButton
                    borderStyle={sitAndReachStyle}
                    title="-"
                    onPress={() => {
                      if (deleteSitAndReachMode) {
                        setDeleteSitAndReachMode(false);
                      } else {
                        resetDeleteModes();
                        setDeleteSitAndReachMode(true);
                      }
                    }}
                  />
                </View>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(student.sitAndReach, false, false, true)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Pull-Ups</Text>
                <View style={styles.editButtons}>
                  <CustomButton
                    borderStyle={styles.editButton}
                    title="+"
                    onPress={() => {
                      resetDeleteModes();
                      addPullUpsEntryHandler();
                    }}
                  />
                  <CustomButton
                    borderStyle={pullUpsStyle}
                    title="-"
                    onPress={() => {
                      if (deletePullUpsMode) {
                        setDeletePullUpsMode(false);
                      } else {
                        resetDeleteModes();
                        setDeletePullUpsMode(true);
                      }
                    }}
                  />
                </View>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(student.pullUps)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Push-Ups</Text>
                <View style={styles.editButtons}>
                  <CustomButton
                    borderStyle={styles.editButton}
                    title="+"
                    onPress={() => {
                      resetDeleteModes();
                      addPushUpsEntryHandler();
                    }}
                  />
                  <CustomButton
                    borderStyle={pushUpsStyle}
                    title="-"
                    onPress={() => {
                      if (deletePushUpsMode) {
                        setDeletePushUpsMode(false);
                      } else {
                        resetDeleteModes();
                        setDeletePushUpsMode(true);
                      }
                    }}
                  />
                </View>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(student.pushUps)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Flexed Arm Hang</Text>
                <View style={styles.editButtons}>
                  <CustomButton
                    borderStyle={styles.editButton}
                    title="+"
                    onPress={() => {
                      resetDeleteModes();
                      addFlexedArmHangEntryHandler();
                    }}
                  />
                  <CustomButton
                    borderStyle={flexedArmHangStyle}
                    title="-"
                    onPress={() => {
                      if (deleteFlexedArmHangMode) {
                        setDeleteFlexedArmHangMode(false);
                      } else {
                        resetDeleteModes();
                        setDeleteFlexedArmHangMode(true);
                      }
                    }}
                  />
                </View>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(student.flexedArmHang, false, true, false)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Mile Run</Text>
                <View style={styles.editButtons}>
                  <CustomButton
                    borderStyle={styles.editButton}
                    title="+"
                    onPress={() => {
                      resetDeleteModes();
                      addMileEntryHandler();
                    }}
                  />
                  <CustomButton
                    borderStyle={mileStyle}
                    title="-"
                    onPress={() => {
                      if (deleteMileMode) {
                        setDeleteMileMode(false);
                      } else {
                        resetDeleteModes();
                        setDeleteMileMode(true);
                      }
                    }}
                  />
                </View>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(student.mile, true, false, false)}
              </View>

              <View style={styles.activityTitleView}>
                <Text style={styles.activityTitle}>Shuttle Run</Text>
                <View style={styles.editButtons}>
                  <CustomButton
                    borderStyle={styles.editButton}
                    title="+"
                    onPress={() => {
                      resetDeleteModes();
                      addShuttleEntryHandler();
                    }}
                  />
                  <CustomButton
                    borderStyle={shuttleStyle}
                    title="-"
                    onPress={() => {
                      if (deleteShuttleMode) {
                        setDeleteShuttleMode(false);
                      } else {
                        resetDeleteModes();
                        setDeleteShuttleMode(true);
                      }
                    }}
                  />
                </View>
              </View>
              <View style={styles.infoBlock}>
                {createInfoBlock(student.shuttle, false, true, false)}
              </View>
            </ScrollView>
          </View>
          <View style={styles.basicInfo}>
            <Text style={styles.infoTitle}>Basic Information</Text>
            <View style={styles.infoBlock}>
              <View style={{ padding: 10 }}>
                <View style={styles.entry}>
                  <Text style={styles.basicInfoTitle}>First Name</Text>
                  <TextInput
                    style={styles.textBox}
                    placeholder={student.firstName}
                    placeholderTextColor="white"
                    onChangeText={(input) => {
                      student.firstName = input;
                    }}
                    maxLength={30}
                  />
                </View>
                <View style={styles.entry}>
                  <Text style={styles.basicInfoTitle}>Last Name</Text>
                  <TextInput
                    style={styles.textBox}
                    placeholder={student.lastName}
                    placeholderTextColor="white"
                    onChangeText={(input) => {
                      student.lastName = input;
                    }}
                    maxLength={30}
                  />
                </View>
                <View style={styles.entry}>
                  <Text style={styles.basicInfoTitle}>Age</Text>
                  <TextInput
                    style={styles.textBox}
                    placeholder={student.age}
                    placeholderTextColor="white"
                    onChangeText={(input) => {
                      student.age = input;
                    }}
                    maxLength={3}
                    keyboardType="number-pad"
                  />
                </View>
              </View>
            </View>
            <RadioButton.Group
              onValueChange={(val) => {
                student.gender = val;
                forceUpdate();
              }}
              value={student.gender}
            >
              <View style={styles.radioButtons}>
                <View style={styles.radioButton}>
                  <RadioButton.Item label="Boy" value="Boy" />
                </View>
                <View style={styles.radioButton}>
                  <RadioButton.Item label="Girl" value="Girl" />
                </View>
              </View>
            </RadioButton.Group>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },

  entry: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 5,
  },

  textBox: {
    color: "#3BF513",
    opacity: 0.6,
    fontSize: 12,
  },

  units: {
    fontSize: 12,
    fontFamily: Fonts.secondary,
    color: "white",
  },

  noEntry: {
    fontSize: 12,
    textAlign: "center",
    fontFamily: Fonts.secondary,
    color: "white",
  },

  information: {
    justifyContent: "center",
    alignItems: "center",
    height: "150%",
  },

  fitnessInfo: {
    height: "60%",
    width: "90%",
    backgroundColor: Colors.shades.secondary,
    borderRadius: 15,
    borderWidth: 1,
    padding: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5,
  },

  infoTitle: {
    fontFamily: Fonts.primary,
    fontSize: 20,
    color: "white",
    textAlign: "left",
    marginVertical: 5,
    padding: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
  },

  activityTitleView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  activityTitle: {
    fontFamily: Fonts.secondary,
    fontSize: 16,
    fontStyle: "italic",
    color: "white",
    textAlign: "left",
    marginVertical: 5,
    padding: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
  },

  editButtons: {
    flexDirection: "row",
  },

  editButton: {
    height: 30,
    width: 30,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
    marginLeft: 20,
  },

  infoBlock: {
    backgroundColor: Colors.colors.primary,
    borderRadius: 15,
    borderWidth: 1,
    marginVertical: 10,
    height: 90,
    justifyContent: "center",
  },

  basicInfo: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5,
    padding: 5,
    paddingHorizontal: 10,
    margin: 20,
    width: "90%",
    height: "30%",
    backgroundColor: Colors.shades.secondary,
    borderRadius: 15,
    borderWidth: 1,
  },

  basicInfoTitle: {
    color: "white",
    fontSize: 12,
  },

  radioButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  radioButton: {
    borderWidth: 0.5,
    borderRadius: 15,
    marginHorizontal: 10,
    backgroundColor: "white",
    height: 50,
    width: 100,
  },
});

export default EditStudentScreen;
