import { StyleSheet, Text, View } from "react-native";
import { Checkbox, Switch, Title } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
// import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import Counter from "./counter";

const Settings = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.settingsBox}>
      <Title style={styles.cardTitle}>Settings</Title>
      <View style={styles.counterLabel}>
        <View>
          <Text style={styles.settingsTxt}>Limit your option</Text>
          <Text style={styles.settingsTxt}>Set a timer</Text>
        </View>
        <Counter />
      </View>
      <View style={styles.pickBoxContainer}>
        <Text style={styles.settingsTxt}>Pick for me</Text>

        <View style={styles.bottomSettingsIcons}>
          <View style={styles.check}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.repeatContainer}>
        <Title style={styles.settingsTxt}>No repeating mode</Title>

        <View style={styles.bottomSettingsIcons}>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
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
  settingsBox: {
    marginHorizontal: 30,
  },
  cardTitle: {
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 60,
    marginBottom: 50,
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },
  repeatContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  homeSettingContainer: {
    flexDirection: "row",
    justifyContent: "center",

    marginTop: 275,
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
    justifyContent: "space-between",
  },
  settingsTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 19,
    marginVertical: 18,
  },
  counterLabel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomSettingsIcons: {
    marginRight: 33,
  },
  check: {
    // borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    marginRight: 6,
  },
  homeSettingsTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 16,
  },
});
