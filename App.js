import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { AppRegistry } from "react-native";
import MyButton from "./components/button";
import MyCard from "./components/card";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your application</Text>
        <MyButton />
        <MyCard />
        <StatusBar style="auto" />
      </View>
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
