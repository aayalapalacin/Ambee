import * as React from "react";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  FlatList,
} from "react-native";
import OptionBtn from "./optionBtn";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const HowManyCards = () => {
  const window = useWindowDimensions();

  return (
    <Card height={window.height} style={styles.container}>
      <Card.Content>
        <Title style={styles.cardTitle}>
          How many cards would you like to start with?
        </Title>
        <View style={styles.btnContainer}>
          <View style={styles.top}>
            <Button style={styles.genreBtn} mode="contained">
              <Text style={styles.genreBtnTxt}>7</Text>
            </Button>
          </View>
          <View style={styles.mid}>
            <Button style={styles.genreBtn} mode="contained">
              <Text style={styles.genreBtnTxt}>5</Text>
            </Button>
          </View>
          <View style={styles.low}>
            <Button style={styles.genreBtn} mode="contained">
              <Text style={styles.genreBtnTxt}>3</Text>
            </Button>
          </View>
        </View>
      </Card.Content>
      <Button style={styles.continueBtn} mode="contained">
        <Text style={styles.btnTxt}>Continue</Text>
      </Button>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    marginHorizontal: 5,
  },
  cardTitle: {
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 60,
    marginBottom: 50,
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },

  genreBtn: {
    marginTop: 20,
    padding: 22,
  },
  continueBtn: {
    marginHorizontal: 90,
    marginTop: 100,
  },
  btnTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 20,
  },
  genreBtnTxt: {
    fontSize: 20,
  },
  genreContainer: {
    flexDirection: "row",
  },
  genreDiv: {
    width: 100,
  },
  top: {
    alignItems: "flex-start",
  },
  mid: {
    alignItems: "flex-end",
  },
  low: {
    alignItems: "flex-start",
  },
  btnContainer: {
    marginHorizontal: 55,
  },
});
export default HowManyCards;
