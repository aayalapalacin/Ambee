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

const StepThree = ({ navigation }) => {
  window = useWindowDimensions();
  return (
    <Card style={styles.container} height={window.height}>
      {/* <TouchableOpacity onPress={() => navigation.navigate("HelpOrSurprise")}>
        <Skip />
      </TouchableOpacity> */}
      <Card.Content>
        <View style={styles.picContainer}>
          <Card.Cover
            style={styles.cardPic}
            resizeMode="cover"
            source={require("../../assets/icons/Phone2.png")}
          />
        </View>
        <Title style={styles.cardTitle}>Step Three</Title>
        <Paragraph style={styles.cardParagraph}>
          You'll also be able to limit the amount of cards to choose.
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
            name="dot-fill"
            size={24}
            color="#CF9FFF"
            style={styles.dotFillIcon}
          />
        </View>
      </Card.Content>
      <TouchableOpacity onPress={() => navigation.navigate("HelpOrSurprise")}>
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
    marginTop: "23%",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: "10%",
  },
  dotIcon: {
    marginHorizontal: "1%",
  },
  dotFillIcon: {
    marginHorizontal: "1%",
  },
});

export default StepThree;
