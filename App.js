import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { AppRegistry } from "react-native";
import NextRound from "./screens/main/NextRound";
import YesNoCard from "./screens/main/yesNoCard";
import ChosenCard from "./screens/main/chosenCard";
import Settings from "./screens/main/settings";
import Genres from "./screens/onBoarding/genres";
import WelcomeCard from "./screens/onBoarding/welcomeCard";
import StepOne from "./screens/onBoarding/stepOne";
import StepTwo from "./screens/onBoarding/stepTwo";
import StepThree from "./screens/onBoarding/stepThree";
import StepFour from "./screens/onBoarding/stepFour";
import HelpOrSurprise from "./screens/onBoarding/helpOrSurprise";
import NameBee from "./screens/onBoarding/nameBee";
import HowManyCards from "./screens/onBoarding/howManyCards";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/main/home";
import { useFonts } from "expo-font";
import React from "react";
import { enableScreens } from "react-native-screens";
const Stack = createNativeStackNavigator();
enableScreens();

import CardList from "./screens/main/CardList";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MovieContextProvider } from "./src/services/movies/movies.context";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-ExtraLight": require("./assets/fonts/Nunito-ExtraLight.ttf"),
    "Mali-Bold": require("./assets/fonts/Mali-Bold.ttf"),
    "Mali-Regular": require("./assets/fonts/Mali-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }
  // const navTheme = DefaultTheme;
  // navTheme.colors.background = "white";

  function Logo() {
    return (
      <Image
        resizeMode="contain"
        style={{ height: 65, marginBottom: "1%", marginLeft: "56%" }}
        source={require("./assets/icons/ambeeLogoTransparent.png")}
      />
    );
  }
  function LogoTitle() {
    return (
      <Image
        resizeMode="contain"
        style={{
          height: 40,
          marginBottom: "1%",
          marginRight: "19%",
        }}
        source={require("./assets/icons/ambeeTest.png")}
      />
    );
  }

  return (
    // <SafeAreaProvider>
    <PaperProvider>
      <MovieContextProvider>
        <NavigationContainer>
          <Stack.Navigator
          // screenOptions={{
          //   headerTitle: (props) => <Logo {...props} />,
          // }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              // options={{ headerTitle: (props) => <Logo {...props} /> }}
            />
            <Stack.Screen
              name="WelcomeCard"
              component={WelcomeCard}
              options={{ headerTitle: (props) => <Logo {...props} /> }}
            />
            <Stack.Screen
              name="NameBee"
              component={NameBee}
              options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
            />
            <Stack.Screen
              name="StepOne"
              component={StepOne}
              options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
            />
            <Stack.Screen
              name="StepTwo"
              component={StepTwo}
              options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
              // options={({ navigation }) => ({
              //   // headerLeft: () => (
              //   //   <Button title="nbut" onPress={() => console.log("pressed")} />
              //   // ),
              //   // headerTitle:
              //   headerRight: () => <LogoTitle navigation={navigation} />,
              // })}
            />
            <Stack.Screen
              name="StepThree"
              component={StepThree}
              // options={({ navigation }) => ({
              //   headerRight: () => <LogoTitle navigation={navigation} />,
              // })}
              options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
            />
            <Stack.Screen
              name="StepFour"
              component={StepFour}
              options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
              // options={({ navigation }) => ({
              //   headerRight: () => <LogoTitle navigation={navigation} />,
              // })}
            />
            <Stack.Screen
              name="HelpOrSurprise"
              component={HelpOrSurprise}
              options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
              // options={({ navigation }) => ({
              //   headerRight: () => <LogoTitle navigation={navigation} />,
              // })}
            />
            <Stack.Screen
              name="Genres"
              component={Genres}
              options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
              // options={({ navigation }) => ({
              //   headerRight: () => <LogoTitle navigation={navigation} />,
              // })}
            />
            <Stack.Screen
              name="HowManyCards"
              component={HowManyCards}
              options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
            />
            <Stack.Screen
              name="YesNoCard"
              component={YesNoCard}
              options={{ headerTitle: (props) => <Logo {...props} /> }}
              // options={({ navigation }) => ({
              //   headerRight: () => <LogoTitle navigation={navigation} />,
              // })}
            />
            <Stack.Screen
              name="NextRound"
              component={NextRound}
              options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
              // options={({ navigation }) => ({
              //   title: "Home",
              //   headerStyle: {
              //     backgroundColor: "#273469",
              //   },
              //   headerTintColor: "#EBF2FA",
              //   headerRight: () => (
              //     <Button // a button in the header!
              //       onPress={() => navigation.navigate("WelcomeCard")}
              //       title="Account"
              //     />
              //   ),
              // })}
            />
            <Stack.Screen
              name="ChosenCard"
              component={ChosenCard}
              options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
            />
            <Stack.Screen
              name="CardList"
              component={CardList}
              options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MovieContextProvider>
    </PaperProvider>
    // </SafeAreaProvider>
  );
}
AppRegistry.registerComponent(App, () => Main);
const styles = StyleSheet.create({});
