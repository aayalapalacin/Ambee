import { StyleSheet, Text, View, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useState } from "react";

const Counter = ({ newTimer, setNewTimer, newLimit, setNewLimit }) => {
  const [optionCount, setOptionCount] = useState(5);
  const [timerCount, setTimerCount] = useState(30);
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@timerCount", value);
    } catch (e) {
      console.log(e);
    }
  };

  function optionIncrement() {
    setOptionCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function optionDecrement() {
    setOptionCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  function timerIncrement() {
    setNewTimer(timerCount + 1);
    setTimerCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function timerDecrement() {
    setTimerCount(function (prevCount) {
      if (prevCount > 0) {
        setNewTimer(timerCount - 1);
        return (prevCount -= 1);
      } else {
        setNewTimer(0);
        return (prevCount = 0);
      }
    });
  }

  return (
    <View>
      <View style={styles.countContainer}>
        <View>
          <AntDesign
            style={styles.incrementIcons}
            onPress={() => optionDecrement()}
            name="minus"
            size={21}
            color="black"
          />
        </View>
        <View>
          <Text style={styles.countBorder} variant="displaySmall">
            {optionCount}
          </Text>
        </View>
        <View>
          <AntDesign
            style={styles.incrementIcons}
            onPress={() => optionIncrement()}
            name="plus"
            size={21}
            color="black"
          />
        </View>
      </View>
      <View style={styles.countContainer}>
        <View>
          <AntDesign
            style={styles.incrementIcons}
            onPress={() => timerDecrement()}
            name="minus"
            size={21}
            color="black"
          />
        </View>
        <View>
          <Text style={styles.countBorder} variant="displaySmall">
            {timerCount}
          </Text>
        </View>
        <View>
          <AntDesign
            style={styles.incrementIcons}
            onPress={() => timerIncrement()}
            name="plus"
            size={21}
            color="black"
          />
        </View>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  countContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
  countBorder: {
    textAlign: "center",
    borderWidth: 1,
    paddingHorizontal: 22,
    paddingVertical: 3.5,
    borderRadius: 13,
    backgroundColor: "white",
  },
  settingsTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 19,
  },
  incrementIcons: {
    paddingHorizontal: 5,
  },
});
