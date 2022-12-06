import { StyleSheet, Text, View } from "react-native";
import { Checkbox, Switch } from "react-native-paper";
import React from "react";
import Counter from "./counter";

const Settings = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      <Checkbox.Item label="Item" status="checked" />
      <Counter />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
