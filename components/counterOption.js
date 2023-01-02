import { StyleSheet, Text, View, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import React, { useState } from "react";

const CounterOption = ({ setNewTimer, setNewLimit }) => {
  const [optionCount, setOptionCount] = useState(5);
  const [timerCount, setTimerCount] = useState(30);

  function optionIncrement() {
    setNewLimit(optionCount + 1);
    setOptionCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function optionDecrement() {
    setOptionCount(function (prevCount) {
      if (prevCount > 0) {
        setOptionCount(optionCount - 1);
        return (prevCount -= 1);
      } else {
        setOptionCount(0);
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
    <View style={styles.countParent}>
      <View style={styles.countContainer}>
        <View style={styles.countBackground}>
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
        <View style={styles.countBackground}>
          <AntDesign
            style={styles.incrementIcons}
            onPress={() => optionIncrement()}
            name="plus"
            size={21}
            color="black"
          />
        </View>
      </View>
    </View>
  );
};

export default CounterOption;

const styles = StyleSheet.create({
  countContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  countBorder: {
    textAlign: "center",
    borderWidth: 1,
    paddingHorizontal: 22,
    paddingVertical: 3.5,
    borderRadius: 13,
    backgroundColor: "white",
  },
  countBackground: {
    // height: "140%",
    // borderBottomWidth: 0.5,
  },
  settingsTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 19,
  },
  incrementIcons: {
    paddingHorizontal: 5,
  },
});
