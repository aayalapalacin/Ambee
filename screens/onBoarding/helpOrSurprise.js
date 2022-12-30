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
          // style={styles.swipeIcons}
          source={require("../../assets/icons/helpOrChoose.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.btnDescrition}>
        <Text style={styles.btnDescritionTxt}>
          Want some options to choose from? We can help!
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Genres")}>
          <ContinueBtn text="Help me choose" />
        </TouchableOpacity>
        <View style={styles.btnDescrition}>
          <Text style={styles.btnDescritionTxt}>
            You don't want to pick? We got you with a random movie!{" "}
          </Text>
        </View>
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
    marginTop: "2%",
    marginBottom: "52%",
  },

  helpChooseImgContainer: {
    marginTop: "15%",
    marginBottom: "6%",
    alignItems: "center",
  },
  btnDescrition: {
    alignItems: "center",
    marginHorizontal: "25%",
  },
  btnDescritionTxt: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Mali-Regular",
  },
});
