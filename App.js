import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { AppRegistry } from "react-native";
import NextRound from "./screens/main/NextRound";
import YesNoCard from "./screens/main/yesNoCard";
import ChosenCard from "./screens/main/chosenCard";
import Settings from "./screens/main/settings";
import Options from "./screens/main/options";
import WelcomeCard from "./screens/onBoarding/welcomeCard";
import StepOne from "./screens/onBoarding/stepOne";
import StepTwo from "./screens/onBoarding/stepTwo";
import StepThree from "./screens/onBoarding/stepThree";
import NameBee from "./screens/onBoarding/nameBee";
import HowManyCards from "./screens/onBoarding/howManyCards";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/main/home";
import { useFonts } from "expo-font";
import React from "react";
import { enableScreens } from "react-native-screens";
const Stack = createNativeStackNavigator();
enableScreens();
export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-ExtraLight": require("./assets/fonts/Nunito-ExtraLight.ttf"),
    "Mali-Bold": require("./assets/fonts/Mali-Bold.ttf"),
    "Mali-Regular": require("./assets/fonts/Mali-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="WelcomeCard" component={WelcomeCard} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="YesNoCard" component={YesNoCard} />
          <Stack.Screen name="ChosenCard" component={ChosenCard} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="NextRound" component={NextRound} />
          <Stack.Screen name="Options" component={Options} />
          <Stack.Screen name="StepOne" component={StepOne} />
          <Stack.Screen name="StepTwo" component={StepTwo} />
          <Stack.Screen name="StepThree" component={StepThree} />
          <Stack.Screen name="NameBee" component={NameBee} />
          <Stack.Screen name="HowManyCards" component={HowManyCards} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
AppRegistry.registerComponent(App, () => Main);
const styles = StyleSheet.create({});
