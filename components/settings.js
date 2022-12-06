import { StyleSheet, Text, View } from "react-native";
import { Checkbox, Switch, Title } from "react-native-paper";

import React from "react";
import Counter from "./counter";

const Settings = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View>
      <Title style={styles.cardTitle}>Settings</Title>
      <View style={styles.repeatContainer}>
        <Title>No repeating mode</Title>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
      <Checkbox.Item label="Pick for me" status="checked" />
      <Counter />
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
    justifyContent: "flex-end",
    alignContent: "center",
    flexDirection: "row",
  },
});
