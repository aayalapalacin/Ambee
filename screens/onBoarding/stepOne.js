import * as React from "react";
import { Text, Card, Title, Paragraph } from "react-native-paper";
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
    <Card style={styles.container} height={window.height}>
      <TouchableOpacity onPress={() => navigation.navigate("Options")}>
        <Skip />
      </TouchableOpacity>
      <Card.Content>
        <View style={styles.picContainer}>
          <Card.Cover
            style={styles.cardPic}
            source={{ uri: "https://picsum.photos/700" }}
          />
        </View>
        <Title style={styles.cardTitle}>Step One</Title>
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
        <Paragraph style={styles.cardParagraph}>
          Our app will recommend a movie based on your preferences.
        </Paragraph>
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
    marginHorizontal: 10,
    marginTop: 60,
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },
  cardParagraph: {
    textAlign: "center",
    marginHorizontal: 45,
    fontFamily: "Mali-Regular",
    fontSize: 23,
    marginBottom: 70,
    paddingTop: 2,
  },
  cardPic: {
    height: 225,
    width: 225,
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

export default StepOne;
