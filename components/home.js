import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("YesNoCard")}
        title="Go to Yes/No Card Page"
      />
      <Button
        onPress={() => navigation.navigate("NextRound")}
        title="Go to Next Round Page"
      />
      <Button
        onPress={() => navigation.navigate("ChosenCard")}
        title="Go to Chosen Card Page"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
