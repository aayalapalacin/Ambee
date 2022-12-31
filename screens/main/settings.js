import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Switch, Title, Button } from "react-native-paper";
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
      {/* 
      <View style={styles.resetContainer}>
        <Title style={styles.settingsTxt}>Reset Data</Title>

        <View style={styles.bottomSettingsIcons}>
          <Button style={styles.resetBtn} mode="contained">
            {" "}
          </Button>
        </View>
      </View> */}
      <View style={styles.repeatContainer}>
        <Title style={styles.settingsTxt}>No repeating mode</Title>

        <View style={styles.bottomSettingsIcons}>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </View>
      <View style={styles.saveContainer}>
        <TouchableOpacity
          onPress={() => {
            storeData(newTimer.toString(), newLimit.toString());
            console.log("saved");
          }}
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
    marginHorizontal: "8%",
  },
  cardTitle: {
    textAlign: "center",
    marginTop: "20%",
    marginBottom: "10%",
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },
  repeatContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "23%",
  },
  resetContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  resetBtn: {
    backgroundColor: "white",
  },

  pickBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  settingsTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 19,
    marginVertical: "9%",
  },
  counterLabel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  saveContainer: {
    marginBottom: "45%",
  },
});
