import { StyleSheet, Text, View } from "react-native";
import { Checkbox, Switch } from "react-native-paper";
// import RnIncrementDecrementBtn from "react-native-increment-decrement-button";
import React from "react";

const Settings = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      <Checkbox.Item label="Item" status="checked" />
      {/* <RnIncrementDecrementBtn minVal={0} minreq={3} max={10} val={3} /> */}
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
