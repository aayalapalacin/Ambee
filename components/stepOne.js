import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet, Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const StepOne = () => (
  <Card>
    <Card.Content>
      <View style={styles.picContainer}>
        <Card.Cover
          style={styles.cardPic}
          source={{ uri: "https://picsum.photos/700" }}
        />
      </View>
      <Title style={styles.cardTitle}>Step One</Title>
      <Paragraph style={styles.cardParagraph}>
        A place where you can get help making decisions without overthinking.
      </Paragraph>
    </Card.Content>
    <Button style={styles.continueBtn} mode="contained">
      <Text style={styles.btnTxt}>Next</Text>
    </Button>
  </Card>
);

const styles = StyleSheet.create({
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
    marginTop: 90,
  },

  continueBtn: {
    marginHorizontal: 90,
    marginBottom: 130,
  },
  btnTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 20,
  },
});

export default StepOne;
