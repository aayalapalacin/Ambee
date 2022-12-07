import { StyleSheet, Text, View } from "react-native";
import { Checkbox, Switch, Title } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

import React from "react";
import Counter from "./counter";

const Settings = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View>
      <Title style={styles.cardTitle}>Settings</Title>
      <Counter />
      <View style={styles.pickBoxContainer}>
        <Text>Pick for me</Text>
        <Checkbox
          style={styles.checkbox}
          label="Pick for me"
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </View>

      <View style={styles.repeatContainer}>
        <Title>No repeating mode</Title>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
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
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  cardTitle: {
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 60,
    marginBottom: 50,
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },
  repeatContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  homeSettingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 38,
    marginBottom: 25,
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
  pickBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
