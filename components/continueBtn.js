import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import React from "react";

const ContinueBtn = (props, { navigation }) => {
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
    marginHorizontal: 60,
    paddingVertical: 6,
    backgroundColor: "#FF6033",
  },
  btnTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 20,
  },
});
