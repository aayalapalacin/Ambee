import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Switch, Title, DataTable } from "react-native-paper";
import React, { useState, useEffect } from "react";
import CounterOption from "../../components/counterOption";
import CounterTimer from "../../components/counterTimer";
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
      <View style={styles.dataView}>
        <DataTable>
          <DataTable.Row style={styles.dataRow}>
            <DataTable.Cell style={styles.dataCellText}>
              <Text style={styles.settingsTxt}>Limit your option</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.dataCellCounter}>
              <CounterOption setNewLimit={setNewLimit} />
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={styles.dataRow}>
            <DataTable.Cell style={styles.dataCellText}>
              <Text style={styles.settingsTxt}>Set a Timer</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.dataCellCounter}>
              <CounterTimer setNewTimer={setNewTimer} />
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={styles.dataRow}>
            <DataTable.Cell style={styles.dataCellText}>
              <Text style={styles.settingsTxt}>No repeat mode</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.dataCellCounter}>
              <Switch
                value={isSwitchOn}
                color="#8570D8"
                onValueChange={onToggleSwitch}
              />
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
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
  settingsBox: {},
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
    fontSize: 15,

    // marginVertical: "9%",
    // borderBottomWidth: 0.5,
  },
  counterLabel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomSettingsIcons: {
    marginRight: "10%",
  },

  saveContainer: {
    marginBottom: "45%",
  },
  dataRow: {
    backgroundColor: "white",
    marginBottom: ".9%",
    paddingVertical: "1%",
    borderRadius: 5,
  },
  settingsBox: {},
  dataCellText: {
    marginBottom: "1%",
    flex: 1,
    paddingLeft: "1%",
  },
  dataCellCounter: {
    justifyContent: "center",
  },
  dataView: {
    marginHorizontal: "5%",
    marginBottom: "20%",
  },
});
