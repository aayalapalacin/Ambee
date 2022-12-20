import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import ContinueBtn from "../../components/continueBtn";

const HelpOrSurprise = ({ navigation }) => {
  const window = useWindowDimensions();
  return (
    <View style={styles.helpContainer} height={window.height}>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Options")}>
          <ContinueBtn text="Help me choose" />
        </TouchableOpacity>
        <Text style={styles.orTxt} variant="titleLarge">
          Or
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("ChosenCard")}>
          <ContinueBtn text="Surprise me" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HelpOrSurprise;

const styles = StyleSheet.create({
  helpContainer: {
    justifyContent: "center",
  },
  btnContainer: {
    marginBottom: 100,
  },
  orTxt: {
    textAlign: "center",
    marginVertical: 20,
  },
});
