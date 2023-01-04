import { StyleSheet, Text, View, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import React, { useState } from "react";

const CounterTimer = ({ setNewTimer, setNewLimit }) => {
  const [optionCount, setOptionCount] = useState(5);
  const [timerCount, setTimerCount] = useState(30);

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
        <View style={styles.countBackground}>
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

export default CounterTimer;

const styles = StyleSheet.create({
  countContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  countBorder: {
    textAlign: "center",
    borderWidth: 2,
    paddingHorizontal: 22,
    paddingVertical: 3.5,
    borderRadius: 13,
    borderColor: "#8570D8",
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
