import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Button, Card, Title } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  FlatList,
} from "react-native";
import OptionBtn from "../../components/optionBtn";
import ContinueBtn from "../../components/continueBtn";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const HowManyCards = ({ navigation }) => {
  const window = useWindowDimensions();

  return (
    <Card height={window.height} style={styles.container}>
      <Card.Content>
        <Title style={styles.cardTitle}>
          How many movies would you like to start with?
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
      <TouchableOpacity onPress={() => navigation.navigate("YesNoCard")}>
        <ContinueBtn text="Continue" />
      </TouchableOpacity>
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
    marginHorizontal: 5,
    marginTop: 60,
    marginBottom: 50,
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },

  genreBtn: {
    marginTop: 20,
    padding: 23,
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
    marginBottom: 75,
  },
  btnContainer: {
    marginHorizontal: 55,
  },
});
export default HowManyCards;
