import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ImageButton from './ImageButton';
import fonts from '../constants/fonts';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
      <View style={styles.button}>
        <ImageButton title='' uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowYXvfQbMeVEwf-AfBXfhSakwGiFhXYS6nw&usqp=CAU' />
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
