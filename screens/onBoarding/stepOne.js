import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import ContinueBtn from "../../components/continueBtn";
import Skip from "../../components/skip";
import { Octicons } from "@expo/vector-icons";

const StepOne = ({ navigation }) => {
  const window = useWindowDimensions();

  return (
    <Card style={styles.container} height={window.height}>
      <TouchableOpacity onPress={() => navigation.navigate("Options")}>
        <Skip />
      </TouchableOpacity>
      <Card.Content>
        <View style={styles.picContainer}>
          <Card.Cover
            resizeMode="contain"
            style={styles.cardPic}
            source={require("../../assets/icons/Search.png")}
          />
        </View>
        <Title style={styles.cardTitle}>Step One</Title>
        <Paragraph style={styles.cardParagraph}>
          Our app will recommend a movie based on preferences.
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
      </Card.Content>
      <TouchableOpacity onPress={() => navigation.navigate("StepTwo")}>
        <ContinueBtn text="Next" />
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
  },

  cardTitle: {
    textAlign: "center",
    // marginHorizontal: 10,
    marginTop: "14%",
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },
  cardParagraph: {
    textAlign: "center",
    // marginHorizontal: "1%",
    fontFamily: "Mali-Regular",
    marginTop: "10%",
    fontSize: 23,
    paddingTop: "1%",
  },
  cardPic: {
    height: 245,
    width: 355,
  },
  picContainer: {
    alignItems: "center",
    marginTop: "8%",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: "10%",
  },
  dotIcon: {
    marginHorizontal: 4,
  },
  dotFillIcon: {
    marginHorizontal: "1%",
  },
});

export default StepOne;
