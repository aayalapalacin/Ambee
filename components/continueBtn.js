import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import { NavigationHelpersContext } from "@react-navigation/native";

const ContinueBtn = (props, { navigation }) => {
  let screen = props.screen;
  return (
    <View>
      <Button style={styles.continueBtn} mode="contained">
        <Text style={styles.btnTxt}>{props.text}</Text>
      </Button>
    </View>
  );
};

export default ContinueBtn;

const styles = StyleSheet.create({
  continueBtn: {
    marginVertical: 10,
    marginHorizontal: 90,
    paddingVertical: 6,
    backgroundColor: "#FF6033",
  },
  btnTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 20,
  },
});
