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
  const timerRef = useRef();

  const [isRunning, setIsRunning] = useState(false);
  const [currTime, setCurrTime] = useState(0);

  useImperativeHandle(ref, () => ({
    resetStopwatchHandler: () => {
      resetStopwatchHandler();
    },
  }));

  const startStopwatchHandler = () => {
    setIsRunning(true);

    const now = new Date().getTime();

    timerRef.current = setInterval(() => {
      props.setCsecs(currTime + Math.floor((new Date().getTime() - now) / 10));
    }, 10);
  };

  const stopStopwatchHandler = () => {
    setIsRunning(false);
    setCurrTime(props.csecs);

    clearInterval(timerRef.current);
  };

  const resetStopwatchHandler = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);

    setCurrTime(0);
    props.setCsecs(0);

    for (let i = 0; i < props.studentList.length; ++i) {
      props.studentList[i].lapCount = 0;
    }
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
    borderRadius: 30,
    margin: 10,
    borderWidth: 2,
    borderColor: Colors.colors.primary,
    width: 220,
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
