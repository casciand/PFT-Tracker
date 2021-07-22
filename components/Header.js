import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ImageButton from './ImageButton';

import menu from '../assets/menu.png'
import fonts from '../constants/fonts';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
      <View style={styles.button}>
        <ImageButton title='' source={menu} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: .26,
    elevation: 5,
    width: '100%',
    height: 90,
    paddingTop: 36,
    paddingLeft: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row'
  },

  headerTitle: {
    color: 'black',
    fontSize: 30,
    fontFamily: fonts.primary
  },

  button: {
    right: -110,
    bottom: -5
  }
});

export default Header;
