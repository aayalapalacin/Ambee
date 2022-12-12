import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const HomeSettings = () => {
  return (
    <View style={styles.homeSettingContainer}>
      <View style={styles.homeContainer}>
        <Feather name="home" size={37} color="black" title="No" />
        <Text style={styles.homeSettingsTxt}>Home</Text>
      </View>
      <View style={styles.homeSettingBox}>
        <Feather name="settings" size={37} color="black" />
        <Text style={styles.homeSettingsTxt}>Settings</Text>
      </View>
    </View>
  );
};

export default HomeSettings;

const styles = StyleSheet.create({
  homeSettingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  homeSettingBox: {
    alignItems: "center",
  },
  homeSettingsTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 16,
  },
  homeContainer: {
    marginRight: 32,
  },
});
