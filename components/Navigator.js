import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import ImageButton from './ImageButton';

const Navigator = (props) => {
  return (
    <View style={styles.navBar}>
      <View style={styles.buttonContainer}>
        <ImageButton title='Roster' uri='https://media.istockphoto.com/vectors/document-icon-vector-design-vector-id1270675230?b=1&k=6&m=1270675230&s=170667a&w=0&h=vEmuh4iscQGkreby-QR_-j4egUPrmMxGatKCP3-yRE8=' />
        <ImageButton title='Fitness Tests' uri='https://media.istockphoto.com/vectors/heartbeat-flat-icon-pixel-perfect-for-mobile-and-web-vector-id1149310034?b=1&k=6&m=1149310034&s=170667a&w=0&h=UcTpkq-8CX-srTEVciRFKWGde8YJFaOdtcJe9OTq7uc=' />
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
