import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";

export const SummaryBox = props => {
  return (
    <View style={[styles.box, props.style]}>
      <Text style={styles.boxText} category="h5">
        {props.title}
      </Text>
      <Text style={styles.boxText}>{props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "45%",
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    height: 87
  },
  boxText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});
