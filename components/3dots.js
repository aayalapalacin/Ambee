import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Octicons } from "@expo/vector-icons";

const Dots = (props) => {
  const [fill1, setFill1] = useState(
    "styles.dotFillIcon"
    // props.dotFill == 1 ? setFill1("dotFillIcon") : setFill1("dotIcon")
  );
  const [fill2, setFill2] = useState("styles.dotIcon");
  const [fill3, setFill3] = useState("styles.dotIcon");
  console.log(props.dotFill);
  return (
    <View style={styles.dotContainer}>
      <Octicons name="dot-fill" size={24} color="#CF9FFF" style={fill1} />
      <Octicons name="dot" size={24} color="#6750A4" style={fill2} />
      <Octicons name="dot" size={24} color="#6750A4" style={fill3} />
    </View>
  );
};

export default Dots;

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
  },
  dotIcon: {
    marginHorizontal: 4,
  },
  dotFillIcon: {
    marginHorizontal: 4,
  },
});
