import React, { useState, useRef } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

import StopwatchButton from "../components/StopwatchButton";

const Stopwatch = (props) => {
  const timerRef = useRef();
  const [isRunning, setIsRunning] = useState(false);

  const startStopwatchHandler = () => {
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      props.setTime((currentTime) => currentTime + 1);
    }, 1000);
  };

  const stopStopwatchHandler = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const resetStopwatchHandler = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    props.setTime(0);
  };

  const formatTime = () => {
    let minutes = `0${Math.floor(props.time / 60)}`.slice(-2);
    let seconds = `0${props.time % 60}`.slice(-2);

    return `${minutes} : ${seconds}`;
  };

  let statusButton = (
    <StopwatchButton onPress={startStopwatchHandler} title="Start" />
  );

  if (isRunning) {
    statusButton = (
      <StopwatchButton onPress={stopStopwatchHandler} title="Stop" />
    );
  }

  return (
    <View>
      <View style={styles.stopwatchView}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.stopwatchText}>{formatTime()}</Text>
        </View>
      </View>
      <View style={styles.buttonView}>
        {statusButton}
        <StopwatchButton onPress={resetStopwatchHandler} title="Reset" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stopwatchView: {
    padding: 10,
    borderRadius: 50,
    margin: 10,
    borderWidth: 2,
    width: 175,
  },

  stopwatchText: {
    fontSize: 40,
  },

  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Stopwatch;
