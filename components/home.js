import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate("MyButton")}
        title="Go to Button"
      ></Button>
      <Button
        onPress={() => navigation.navigate("MyCard")}
        title="Go to Card Page"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
