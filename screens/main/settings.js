import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Switch, Title } from "react-native-paper";
import React, { useState, useEffect } from "react";
import Counter from "../../components/counter";
import HomeSettings from "../../components/homeSettings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ContinueBtn from "../../components/continueBtn";

const Settings = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [newTimer, setNewTimer] = useState(30);
  const [newLimit, setNewLimit] = useState(5);
  useEffect(() => {
    console.log(newLimit, "settings limit");
  }, [newLimit]);
  const storeData = async (newTimerValue, newLimitValue) => {
    try {
      await AsyncStorage.setItem("@timerCount", newTimerValue);
      await AsyncStorage.setItem("@userNum", newLimitValue);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.settingsBox}>
      <Title style={styles.cardTitle}>Settings</Title>
      <View style={styles.counterLabel}>
        <View>
          <Text style={styles.settingsTxt}>Limit your option</Text>
          <Text style={styles.settingsTxt}>Set a timer</Text>
        </View>
        <Counter setNewTimer={setNewTimer} setNewLimit={setNewLimit} />
      </View>

      <View style={styles.repeatContainer}>
        <Title style={styles.settingsTxt}>No repeating mode</Title>

        <View style={styles.bottomSettingsIcons}>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </View>
      <View style={styles.saveContainer}>
        <TouchableOpacity
          onPress={() => storeData(newTimer.toString(), newLimit.toString())}
        >
          <ContinueBtn text="Save Changes" />
        </TouchableOpacity>
      </View>
      <HomeSettings navigation={navigation} />
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
    marginBottom: 80,
  },
  homeSettingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 200,
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
  saveContainer: {
    marginBottom: 150,
  },
});
