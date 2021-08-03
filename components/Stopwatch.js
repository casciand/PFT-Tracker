import React, { useState, useRef } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

import StopwatchButton from "../components/StopwatchButton";

const Stopwatch = (props) => {
  const timerRef = useRef();
  const [isRunning, setIsRunning] = useState(false);

  const startStopwatchHandler = () => {
    setIsRunning(true);

    const now = new Date().getTime();

    timerRef.current = setInterval(() => {
      props.setCsecs(Math.floor((new Date().getTime() - now) / 10));
    }, 10);
  };

  const stopStopwatchHandler = () => {
    setIsRunning(false);

    clearInterval(timerRef.current);
  };

  const resetStopwatchHandler = () => {
    setIsRunning(false);

    clearInterval(timerRef.current);
    props.setCsecs(0);
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
          <Text style={styles.stopwatchText}>{props.format()}</Text>
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
    width: 200,
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
