import * as React from "react";
import { Card, Title, Paragraph, Text } from "react-native-paper";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import ContinueBtn from "../../components/continueBtn";
import Skip from "../../components/skip";
import { Octicons } from "@expo/vector-icons";

const StepFour = ({ navigation }) => {
  const window = useWindowDimensions();
  return (
    <View height={window.height} style={styles.container}>
      <View style={styles.cardContent}>
        <View style={styles.picContainer}>
          <Image
            style={styles.cardPic}
            resizeMode="contain"
            source={require("../../assets/icons/Swipe.png")}
          />
        </View>
        <Title style={styles.cardTitle}>Swipe</Title>
        <Paragraph style={styles.cardParagraph}>
          Swipe left for movies you don't want to see, swipe right to narrow
          down your choices and move to next round.
        </Paragraph>
        <View style={styles.dotContainer}>
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
          <Octicons
            name="dot"
            size={24}
            color="#6750A4"
            style={styles.dotIcon}
          />
          <Octicons
            name="dot-fill"
            size={24}
            color="#CF9FFF"
            style={styles.dotFillIcon}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("HelpOrSurprise")}>
        <ContinueBtn text="Next" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
  },
  cardContent: {
    alignItems: "center",
    height: "76.2%",
  },
  cardTitle: {
    textAlign: "center",
    // marginHorizontal: 10,
    // marginTop: "3%",
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },
  cardParagraph: {
    textAlign: "center",
    marginHorizontal: "6%",
    fontFamily: "Mali-Regular",
    marginTop: "7%",
    fontSize: 23,
    paddingTop: "1%",
  },
  cardPic: {
    height: "100%",
    width: "100%",
  },
  picContainer: {
    alignItems: "center",
    marginTop: "15%",
    width: "99%",
    height: "60%",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: "6%",
  },
  dotIcon: {
    marginHorizontal: "1%",
  },
  dotFillIcon: {
    marginHorizontal: "1%",
  },
});

export default StepFour;
