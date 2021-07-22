import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import fonts from '../constants/fonts';

const ImageButton = (props) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={() => console.log('Pressed')} >
        <Image
          source={{uri: props.uri}}
          style={styles.image}
        />
        <View style={styles.view}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    position: 'relative',
  },

  image: {
    width: 50,
    height: 50
  },

  touchable: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  
  text: {
    fontSize: 8,
    textAlign: 'center',
    bottom: 5,
    fontFamily: fonts.secondary
  }
});

export default ImageButton;
