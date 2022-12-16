import * as React from "react";
import { Card, Title, Paragraph, Text } from "react-native-paper";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import ContinueBtn from "../../components/continueBtn";
import Skip from "../../components/skip";
import { Octicons } from "@expo/vector-icons";

const StepTwo = ({ navigation }) => {
  const window = useWindowDimensions();
  return (
    <Card height={window.height} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Options")}>
        <Skip />
      </TouchableOpacity>
      <Card.Content>
        <View style={styles.picContainer}>
          <Card.Cover
            style={styles.cardPic}
            source={require("../../assets/icons/Phone1.png")}
          />
        </View>
        <Title style={styles.cardTitle}>Step Two</Title>
        <Paragraph style={styles.cardParagraph}>
          Our app will recommend a movie based on your preferences.
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
      </Card.Content>
      <TouchableOpacity onPress={() => navigation.navigate("StepThree")}>
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
    marginHorizontal: 10,
    marginTop: 40,
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },
  cardParagraph: {
    textAlign: "center",
    marginHorizontal: 45,
    fontFamily: "Mali-Regular",
    fontSize: 23,
    marginTop: 20,
    paddingTop: 2,
  },
  cardPic: {
    height: 300,
    width: 260,
  },
  picContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
  },
  dotIcon: {
    marginHorizontal: 4,
  },
  dotFillIcon: {
    marginHorizontal: 4,
  },
});

export default StepTwo;
