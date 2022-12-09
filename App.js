import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { AppRegistry } from "react-native";
import NextRound from "./components/NextRound";
import YesNoCard from "./components/yesNoCard";
import ChosenCard from "./components/chosenCard";
import Settings from "./components/settings";
import Options from "./components/options";
import WelcomeCard from "./components/welcomeCard";
import StepOne from "./components/stepOne";
import StepTwo from "./components/stepTwo";
import StepThree from "./components/stepThree";
import NameBee from "./components/nameBee";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/home";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import { enableScreens } from "react-native-screens";
// import * as SplashScreen from "expo-splash-screen";
const Stack = createNativeStackNavigator();
enableScreens();
export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-ExtraLight": require("./assets/fonts/Nunito-ExtraLight.ttf"),
    "Mali-Bold": require("./assets/fonts/Mali-Bold.ttf"),
    "Mali-Regular": require("./assets/fonts/Mali-Regular.ttf"),
  });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="YesNoCard" component={YesNoCard} />
          <Stack.Screen name="ChosenCard" component={ChosenCard} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="NextRound" component={NextRound} />
          <Stack.Screen name="Options" component={Options} />
          <Stack.Screen name="WelcomeCard" component={WelcomeCard} />
          <Stack.Screen name="StepOne" component={StepOne} />
          <Stack.Screen name="StepTwo" component={StepTwo} />
          <Stack.Screen name="StepThree" component={StepThree} />
          <Stack.Screen name="NameBee" component={NameBee} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
AppRegistry.registerComponent(App, () => Main);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
