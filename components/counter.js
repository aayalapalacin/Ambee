import { StyleSheet, Text, View, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function increment() {
    // setCount((prevCount) => (prevCount += 1));
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
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
            onPress={() => increment()}
            name="plus"
            size={15}
            color="black"
          />
        </View>
        <View>
          <Text style={styles.countBorder} variant="displaySmall">
            {count}
          </Text>
        </View>
        <View>
          <AntDesign
            onPress={() => decrement()}
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
            onPress={() => increment()}
            name="plus"
            size={15}
            color="black"
          />
        </View>
        <View>
          <Text style={styles.countBorder} variant="displaySmall">
            {count}
          </Text>
        </View>
        <View>
          <AntDesign
            onPress={() => decrement()}
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
