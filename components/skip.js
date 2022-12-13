import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Skip() {
  return (
    <View style={styles.skipContainer}>
      <Text style={styles.skipTxt} variant="bodyMedium">
        Skip
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  skipContainer: {
    alignItems: "flex-end",
    marginTop: 60,
    marginEnd: 20,
  },
  skipTxt: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
