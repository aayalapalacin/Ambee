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

const StepTwo = ({ navigation }) => {
  const window = useWindowDimensions();
  return (
    <View height={window.height} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Options")}>
        <Skip />
      </TouchableOpacity>
      <View style={styles.cardContent}>
        <View style={styles.picContainer}>
          <Image
            style={styles.cardPic}
            resizeMode="contain"
            source={require("../../assets/icons/Search.png")}
          />
        </View>
        <Title style={styles.cardTitle}>Pick a genre</Title>
        <Paragraph style={styles.cardParagraph}>
          Our app will give you movies to choose from from the genres you
          select!
        </Paragraph>
        <View style={styles.dotContainer}>
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
          <Octicons
            name="dot"
            size={24}
            color="#6750A4"
            style={styles.dotIcon}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("StepThree")}>
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
    marginHorizontal: "6%",
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
    alignItems: "center",
    marginTop: "8%",
    width: "87%",
    height: "50%",
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

export default StepTwo;
