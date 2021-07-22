import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Button } from 'react-native';

import Student from './Student';

const StudentRoster = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer} indicatorStyle='black'>
      <Student name='First Last' gender='Boy' age='7' />
      <Student name='First Last' gender='Girl' age='9' />
      <Student name='First Last' gender='Girl' age='12' />
      <Student name='First Last' gender='Boy' age='15' />
      <Student name='First Last' gender='Boy' age='7' />
      <Student name='First Last' gender='Girl' age='9' />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 15
  }
});

export default StudentRoster;
