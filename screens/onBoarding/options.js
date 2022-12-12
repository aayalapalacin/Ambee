import * as React from "react";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  FlatList,
} from "react-native";
import OptionBtn from "../../components/optionBtn";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const Options = ({ navigation }) => {
  const window = useWindowDimensions();

  return (
    <Card height={window.height} style={styles.container}>
      <Card.Content>
        <Title style={styles.cardTitle}>What type of movies do you like?</Title>
        <OptionBtn />
      </Card.Content>
      <Button
        style={styles.continueBtn}
        mode="contained"
        onPress={() => navigation.navigate("HowManyCards")}
      >
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

  continueBtn: {
    marginHorizontal: 90,
    marginTop: 70,
  },
  btnTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 20,
  },
  genreContainer: {
    flexDirection: "row",
  },
  genreDiv: {
    width: 100,
  },
});
export default Options;
