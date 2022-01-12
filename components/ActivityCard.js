import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import fonts from "../constants/fonts";
import colors from "../constants/colors";
import ft from "../functions/FormatTimeFunctions";

const ActivityCard = (props) => {
  const hasCompleted = (threshold) => {
    if (props.best == "N/A") return false;

    if (props.title == "Mile Run" || props.title == "Shuttle Run") {
      return props.best <= threshold;
    } else {
      return props.best >= threshold;
    }
  };

  const formatScore = (score) => {
    if (score == "N/A") return score;

    if (props.title == "Sit & Reach") {
      return score + " cm";
    } else if (props.title == "Arm Hang" || props.title == "Shuttle Run") {
      return score + " s";
    } else if (props.title == "Mile Run") {
      return ft.formatTimeMinutes(score);
    } else {
      return score;
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{props.title}</Text>
        <Text style={styles.titleText}>Best: {formatScore(props.best)}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.subtitle}>
          <Text style={styles.subtitleText}>National: {formatScore(props.national)}</Text>
          <Text style={styles.subtitleText}>Presidential: {formatScore(props.presidential)}</Text>
        </View>
        <View style={styles.subtitle}>
          <Text style={styles.subtitleText}>{hasCompleted(props.national) ? "Completed" : ""}</Text>
          <Text style={styles.subtitleText}>
            {hasCompleted(props.presidential) ? "Completed" : ""}
          </Text>
        </View>
      </View>
      <View style={styles.scores}>
        <ScrollView showsVerticalScrollIndicator={false}>{props.scores}</ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.secondary,
    borderRadius: 15,
    marginVertical: 10,
    padding: 15,
    height: 280,
    width: "90%",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
  },

  title: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  subtitle: {
    marginTop: 5,
  },

  titleText: {
    fontFamily: fonts.secondary,
    fontSize: 18,
    fontStyle: "italic",
    color: "white",
    textAlign: "left",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
  },

  subtitleText: {
    fontFamily: fonts.secondary,
    fontSize: 12,
    color: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
  },

  scores: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    borderWidth: 1,
    marginVertical: 10,
    height: "80%",
    padding: 10,
    flex: 1,
  },
});

export default ActivityCard;
