import * as React from "react";
import { Card, Title, Paragraph, Text } from "react-native-paper";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import ContinueBtn from "../../components/continueBtn";

const StepTwo = ({ navigation }) => {
  const window = useWindowDimensions();
  return (
    <Card height={window.height} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Options")}>
        <View style={styles.skipContainer}>
          <Text style={styles.skipTxt} variant="bodyMedium">
            Skip
          </Text>
        </View>
      </TouchableOpacity>
      <Card.Content>
        <View style={styles.picContainer}>
          <Card.Cover
            style={styles.cardPic}
            source={{ uri: "https://picsum.photos/700" }}
          />
        </View>
        <Title style={styles.cardTitle}>Step Two</Title>
        <Paragraph style={styles.cardParagraph}>
          Our app will recommend a movie based on your preferences.
        </Paragraph>
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
  skipContainer: {
    alignItems: "flex-end",
    marginTop: 60,
    marginEnd: 20,
  },
  skipTxt: {
    fontWeight: "bold",
  },
  cardTitle: {
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 60,
    marginBottom: 50,
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
});

export default StepTwo;
