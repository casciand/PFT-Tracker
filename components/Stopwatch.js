import React, { useState, useRef, useImperativeHandle, forwardRef } from "react";
import { View, StyleSheet, Text } from "react-native";

import StopwatchButton from "../components/StopwatchButton";
import colors from "../constants/colors";

const Stopwatch = (props, ref) => {
  const [csecs, setCsecs] = useState(0);

  const stopwatchRef = useRef();

  const [isRunning, setIsRunning] = useState(false);
  const [currTime, setCurrTime] = useState(0);

  useImperativeHandle(ref, () => ({
    resetStopwatchHandler: () => {
      resetStopwatchHandler();
    },
    csecs: csecs,
  }));

  const startStopwatchHandler = () => {
    setIsRunning(true);

    const now = new Date().getTime();

    stopwatchRef.current = setInterval(() => {
      setCsecs(currTime + Math.floor((new Date().getTime() - now) / 10));
    }, 10);
  };

  const stopStopwatchHandler = () => {
    setIsRunning(false);
    setCurrTime(csecs);

    clearInterval(stopwatchRef.current);
  };

  const resetStopwatchHandler = () => {
    setIsRunning(false);
    clearInterval(stopwatchRef.current);

    setCurrTime(0);
    setCsecs(0);
  };

  let statusButton = isRunning ? (
    <StopwatchButton onPress={stopStopwatchHandler} title="Stop" />
  ) : (
    <StopwatchButton onPress={startStopwatchHandler} title="Start" />
  );

  return (
    <View style={styles.border}>
      <View style={styles.stopwatchView}>
        <Text style={styles.stopwatchText} allowFontScaling={false}>
          {props.format(csecs / 100)}
        </Text>
      </View>
      <View style={styles.buttonView}>
        {statusButton}
        <StopwatchButton onPress={resetStopwatchHandler} title="Reset" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderColor: colors.primary,
    borderRadius: 20,
    padding: 15,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 5,
  },

  stopwatchView: {
    padding: 10,
    borderRadius: 30,
    margin: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    width: 240,
  },

  stopwatchText: {
    fontSize: 40,
    color: colors.primary,
    textAlign: "center",
  },

  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 40,
  },
});

export default forwardRef(Stopwatch);
