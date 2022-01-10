import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { View, StyleSheet, Text } from "react-native";

import StopwatchButton from "../components/StopwatchButton";
import Colors from "../constants/colors";

const Stopwatch = (props, ref) => {
  const [csecs, setCsecs] = useState(0);

  const stopwatchRef = useRef();

  const [isRunning, setIsRunning] = useState(false);
  const [currTime, setCurrTime] = useState(0);

  useImperativeHandle(ref, () => ({
    resetStopwatchHandler: () => {
      resetStopwatchHandler();
    },
    csecs: csecs
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

  let statusButton = isRunning ? <StopwatchButton onPress={stopStopwatchHandler} title="Stop" /> : (
    <StopwatchButton onPress={startStopwatchHandler} title="Start" />
  );

  return (
    <View>
      <View style={styles.stopwatchView}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.stopwatchText}>{props.format(csecs / 100)}</Text>
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
    borderRadius: 30,
    margin: 10,
    borderWidth: 2,
    borderColor: Colors.colors.primary,
    width: 240,
  },

  stopwatchText: {
    fontSize: 40,
    color: Colors.colors.primary,
  },

  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 40,
  },
});

export default forwardRef(Stopwatch);
