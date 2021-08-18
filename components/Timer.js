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

const Timer = (props, ref) => {
  const timerRef = useRef();

  const [isRunning, setIsRunning] = useState(false);
  const [currTime, setCurrTime] = useState(6000);

  useImperativeHandle(ref, () => ({
    resetTimerHandler: () => {
      resetTimerHandler();
    },
  }));

  const startTimerHandler = () => {
    setIsRunning(true);

    const now = new Date().getTime();

    timerRef.current = setInterval(() => {
      props.setCsecs(currTime - Math.floor((new Date().getTime() - now) / 10));
    }, 10);
  };

  const stopTimerHandler = () => {
    setIsRunning(false);
    setCurrTime(props.csecs);

    clearInterval(timerRef.current);
  };

  const resetTimerHandler = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);

    setCurrTime(6000);
    props.setCsecs(6000);
  };

  if (props.csecs <= 0) {
    clearInterval(timerRef.current);
  }

  let statusButton = (
    <StopwatchButton onPress={startTimerHandler} title="Start" />
  );

  if (isRunning) {
    statusButton = <StopwatchButton onPress={stopTimerHandler} title="Stop" />;
  }

  return (
    <View>
      <View style={styles.stopwatchView}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.stopwatchText}>
            {FormatTimeFunctions.formatTimeMinutes(props.csecs)}
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
