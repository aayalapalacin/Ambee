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
      <Button
        onPress={() => navigation.navigate("Settings")}
        title="Go to Settings Page"
      />
      <Button
        onPress={() => navigation.navigate("Options")}
        title="See Genre Options"
      />
      <Button
        onPress={() => navigation.navigate("WelcomeCard")}
        title="Go to WelcomeCard"
      />
      <Button
        onPress={() => navigation.navigate("StepOne")}
        title="Go to StepOne"
      />
      <Button
        onPress={() => navigation.navigate("StepTwo")}
        title="Go to StepTwo"
      />
      <Button
        onPress={() => navigation.navigate("StepThree")}
        title="Go to StepThree"
      />
      <Button
        onPress={() => navigation.navigate("NameBee")}
        title="Go to NameBee"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
