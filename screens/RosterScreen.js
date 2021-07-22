import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import uuid from 'react-native-uuid';

import Header from '../components/Header';
import Navigator from '../components/Navigator';
import ImageButton from '../components/ImageButton';
import StudentRoster from '../components/StudentRoster';

const RosterScreen = (props) => {
  const [studentList, setStudentList] = useState([]);

  const addStudentHandler = (studentName, studentAge) => {
    setStudentList((currentStudents) => [
      ...currentStudents,
      {id: uuid.v1(), name: studentName, age: studentAge}
    ]);
  };

  const removeStudentHandler = (studentId) => {
    setStudentList((currentStudents) => {
      return currentStudents.filter((student) => student.id != studentId);
    });
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <Header title='Class Roster' />
      </View>
      <View style={styles.roster}>
        <StudentRoster students={studentList} />
      </View>
      <View style={styles.footer}>
        <Navigator />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  roster: {
    height: '76%',
    padding: 5
  },

  footer: {
    position: 'absolute',
    bottom: -5,
    width: '100%',
    height: '11%',
    flex: 1,
    zIndex: 1
  }
});

export default RosterScreen;
