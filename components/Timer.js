import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { View, StyleSheet, Text } from "react-native";

import StopwatchButton from "../components/StopwatchButton";
import FormatTimeFunctions from "../functions/FormatTimeFunctions";
import Colors from "../constants/colors";

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

  if (csecs <= 0) {
    clearInterval(timerRef.current);
  }

  let statusButton = isRunning ? statusButton = <StopwatchButton onPress={stopTimerHandler} title="Stop" /> : (
    <StopwatchButton onPress={startTimerHandler} title="Start" />
  );

  return (
    <View>
      <View style={styles.stopwatchView}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.stopwatchText}>
            {FormatTimeFunctions.formatTimeMinutes(csecs / 100)}
          </Text>
        </View>
      </View>
      <View style={styles.buttonView}>
        {statusButton}
        <StopwatchButton onPress={resetTimerHandler} title="Reset" />
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

export default forwardRef(Timer);
