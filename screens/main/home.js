import { StyleSheet, Text, View, Button } from "react-native";
import { Title } from "react-native-paper";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View>
      <Title style={styles.title}>
        Link to screens (in order with user flow):
      </Title>
      <Button
        onPress={() => navigation.navigate("WelcomeCard")}
        title="Go to WelcoeCard"
      />
      <Button
        onPress={() => navigation.navigate("NameBee")}
        title="Go to NameBee"
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
        onPress={() => navigation.navigate("StepFour")}
        title="Go to StepFour"
      />
      <Button
        onPress={() => navigation.navigate("HelpOrSurprise")}
        title="Go to HelpOrSurprise"
      />
      <Button
        onPress={() => navigation.navigate("Genres")}
        title="See Genre Options"
      />
      <Button
        onPress={() => navigation.navigate("HowManyCards")}
        title="Go to HowManyCards"
      />
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
        onPress={() => navigation.navigate("CardList")}
        title="Go to Card List"
      />
      <Button
        onPress={() => navigation.navigate("Settings")}
        title="Go to Settings Page"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingLeft: 25,
  },
});
