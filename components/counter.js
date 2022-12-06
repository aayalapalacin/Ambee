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
      {/* <View style={styles.btnContainer}></View> */}
      <View style={styles.count}>
        <Text>Limit your option</Text>
        <View>
          <AntDesign
            onPress={() => increment()}
            name="plus"
            size={24}
            color="black"
          />
        </View>
        <View>
          <Text variant="displaySmall">{count}</Text>
        </View>
        <View>
          <AntDesign
            onPress={() => decrement()}
            name="minus"
            size={24}
            color="black"
          />
        </View>
      </View>
      <View style={styles.count}>
        <Text>Set a timer</Text>
        <View>
          <AntDesign
            onPress={() => increment()}
            name="plus"
            size={24}
            color="black"
          />
        </View>
        <View>
          <Text variant="displaySmall">{count}</Text>
        </View>
        <View>
          <AntDesign
            onPress={() => decrement()}
            name="minus"
            size={24}
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
  count: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
