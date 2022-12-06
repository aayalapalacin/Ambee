import { StyleSheet, Text, View, Button } from "react-native";
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
      <View style={styles.btnContainer}>
        <Button onPress={() => decrement()} title="decrement" />
      </View>
      <View style={styles.count}>
        <Text variant="displaySmall">{count}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button onPress={() => increment()} title="increment" />
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  count: {
    alignItems: "center",
  },
});
