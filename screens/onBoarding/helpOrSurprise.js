import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import ContinueBtn from "../../components/continueBtn";

const HelpOrSurprise = ({ navigation }) => {
  const window = useWindowDimensions();
  return (
    <View style={styles.helpContainer} height={window.height}>
      <View style={styles.helpChooseImgContainer}>
        <Image
          style={styles.swipeIcons}
          source={require("../../assets/icons/helpOrChoose.png")}
          resizeMode="contain"
        />
      </View>
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
    marginTop: "7%",
    marginBottom: "52%",
  },
  orTxt: {
    textAlign: "center",
    marginVertical: "6%",
  },
  helpChooseImgContainer: {
    marginTop: "15%",
    marginBottom: "8%",
    alignItems: "center",
  },
});
