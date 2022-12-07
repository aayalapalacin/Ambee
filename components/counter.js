import { StyleSheet, Text, View, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import React, { useState } from "react";

const Counter = () => {
  const [optionCount, setOptionCount] = useState(0);
  const [timerCount, setTimerCount] = useState(0);
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
    setTimerCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function timerDecrement() {
    setTimerCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <View>
      <View style={styles.countContainer}>
        <Text>Limit your option</Text>
        <View>
          <AntDesign
            onPress={() => optionIncrement()}
            name="plus"
            size={15}
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
            onPress={() => optionDecrement()}
            name="minus"
            size={15}
            color="black"
          />
        </View>
      </View>
      <View style={styles.countContainer}>
        <Text>Set a timer</Text>
        <View>
          <AntDesign
            onPress={() => timerIncrement()}
            name="plus"
            size={15}
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
            onPress={() => timerDecrement()}
            name="minus"
            size={15}
            color="black"
          />
        </View>
      </View>
      <View style={styles.btnContainer}></View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  countContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  countBorder: {
    textAlign: "center",
    borderWidth: 1,
    paddingHorizontal: 13,
    paddingVertical: 1,
    borderRadius: 10,
    marginHorizontal: 3,
  },
});
