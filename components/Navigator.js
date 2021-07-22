import React from 'react';
import { View, StyleSheet } from 'react-native';

import ImageButton from './ImageButton';

import roster from '../assets/roster.jpg'
import fitness from '../assets/fitness.jpg'

const Navigator = (props) => {
  return (
    <View style={styles.navBar}>
      <View style={styles.buttonContainer}>
        <ImageButton title='Roster' source={roster} />
        <ImageButton title='Fitness Tests' source={fitness} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: .26,
    elevation: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },

  buttonContainer: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  }
});

export default Navigator;
