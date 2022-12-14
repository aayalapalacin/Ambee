import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const HomeSettings = ({ navigation }) => {
  return (
    <View style={styles.homeSettingContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("YesNoCard")}>
        <View style={styles.homeContainer}>
          <EvilIcons name="undo" size={54} color="black" style={styles.undo} />
          {/* <Feather name="home" size={37} color="black" title="No" /> */}
          <Text style={styles.homeSettingsTxt}>Start Over</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <View style={styles.homeSettingBox}>
          <Feather name="settings" size={37} color="black" />
          <Text style={styles.homeSettingsTxt}>Settings</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeSettings;

const styles = StyleSheet.create({
  homeSettingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    alignItems: "center",
    marginRight: 32,
  },
  undo: {
    // marginLeft: 13,
  },
});
