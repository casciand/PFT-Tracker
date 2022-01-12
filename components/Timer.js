import React, { useState, useRef, useImperativeHandle, forwardRef } from "react";
import { View, StyleSheet, Text } from "react-native";

import StopwatchButton from "../components/StopwatchButton";
import ft from "../functions/FormatTimeFunctions";
import colors from "../constants/colors";

// a one minute timer
const Timer = (props, ref) => {
  const [csecs, setCsecs] = useState(6000);
  const [currTime, setCurrTime] = useState(6000);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef();

  useImperativeHandle(ref, () => ({
    resetTimerHandler: () => {
      resetTimerHandler();
    },
  }));

  const startTimerHandler = () => {
    setIsRunning(true);

    const now = new Date().getTime();

    timerRef.current = setInterval(() => {
      setCsecs(currTime - Math.floor((new Date().getTime() - now) / 10));
    }, 10);
  };

  const stopTimerHandler = () => {
    setIsRunning(false);
    setCurrTime(csecs);

    clearInterval(timerRef.current);
  };

  const resetTimerHandler = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);

    setCurrTime(6000);
    setCsecs(6000);
  };

  if (csecs < 0) {
    clearInterval(timerRef.current);
    setCsecs(0);
  }

  let statusButton = isRunning ? (
    (statusButton = <StopwatchButton onPress={stopTimerHandler} title="Stop" />)
  ) : (
    <StopwatchButton onPress={startTimerHandler} title="Start" />
  );

  return (
    <View style={styles.border}>
      <View style={styles.timerView}>
        <Text style={styles.timerText} allowFontScaling={false}>
          {ft.formatTimeMinutes(csecs / 100)}
        </Text>
      </View>
      <View style={styles.buttonView}>
        {statusButton}
        <StopwatchButton onPress={resetTimerHandler} title="Reset" />
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

  timerView: {
    padding: 10,
    borderRadius: 30,
    margin: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    width: 240,
  },

  timerText: {
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

export default forwardRef(Timer);
