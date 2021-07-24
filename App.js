import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import RosterScreen from './screens/RosterScreen';

export default function App() {

  let content = <RosterScreen />  // add logic to choose current screen

  return (
    <PaperProvider>
      <View style={styles.container}>
        {content}
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
