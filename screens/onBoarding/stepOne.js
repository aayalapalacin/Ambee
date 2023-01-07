import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from "react-native";
import ContinueBtn from "../../components/continueBtn";
import Skip from "../../components/skip";
import { Octicons } from "@expo/vector-icons";

const StepOne = ({ navigation }) => {
  const window = useWindowDimensions();

  return (
    <View style={styles.container} height={window.height}>
      <TouchableOpacity onPress={() => navigation.navigate("Options")}>
        <Skip />
      </TouchableOpacity>
      <View style={styles.cardContent}>
        <View style={styles.picContainer}>
          <Image
            resizeMode="contain"
            style={styles.cardPic}
            source={require("../../assets/icons/choice.png")}
          />
        </View>
        <Title style={styles.cardTitle}>Your Choice Matters</Title>
        <Paragraph style={styles.cardParagraph}>
          We can help you choose or you can get a random movie.
        </Paragraph>
        <View style={styles.dotContainer}>
          <Octicons
            name="dot-fill"
            size={24}
            color="#CF9FFF"
            style={styles.dotFillIcon}
          />
          <Octicons
            name="dot"
            size={24}
            color="#6750A4"
            style={styles.dotIcon}
          />
          <Octicons
            name="dot"
            size={24}
            color="#6750A4"
            style={styles.dotIcon}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("StepTwo")}>
        <ContinueBtn text="Next" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    marginHorizontal: "2%",
  },
  cardContent: {
    alignItems: "center",
    height: "67%",
  },
  cardTitle: {
    textAlign: "center",
    // marginHorizontal: 10,
    marginTop: "12%",
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },

  cardParagraph: {
    textAlign: "center",
    marginHorizontal: "10%",
    fontFamily: "Mali-Regular",
    marginTop: "10%",
    fontSize: 23,
    paddingTop: "1%",
  },
  cardPic: {
    height: "100%",
    width: "100%",
  },
  picContainer: {
    // backgroundColor: "red",
    alignItems: "center",
    marginTop: "8%",
    width: "93%",
    height: "50%",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "6%",
  },
  dotIcon: {
    marginHorizontal: "1%",
  },
  dotFillIcon: {
    marginHorizontal: "1%",
  },
});

export default StepOne;
