import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

const NextRound = () => {
  const window = useWindowDimensions();
  return (
    <Card style={styles.container} height={window.height}>
      <Card.Content>
        <View style={styles.picContainer}>
          <Card.Cover
            style={styles.cardPic}
            source={{ uri: "https://picsum.photos/700" }}
          />
        </View>
        <Title style={styles.cardTitle}>Next Round</Title>
        <Paragraph style={styles.cardParagraph}>
          You have 2 cards left! You're doing great!
        </Paragraph>
      </Card.Content>
      <Button style={styles.continueBtn} mode="contained">
        <Text style={styles.btnTxt}>Continue</Text>
      </Button>
      <View style={styles.homeSettingContainer}>
        <View style={styles.homeContainer}>
          <Feather name="home" size={37} color="black" title="No" />
          <Text style={styles.homeSettingsTxt}>Home</Text>
        </View>
        <View style={styles.homeSettingBox}>
          <Feather name="settings" size={37} color="black" />
          <Text style={styles.homeSettingsTxt}>Settings</Text>
        </View>
      </View>
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
    marginBottom: 40,
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
    marginTop: 70,
  },
  homeSettingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  homeSettingBox: {
    alignItems: "center",
  },
  homeSettingsTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 16,
  },
  homeContainer: {
    marginRight: 32,
  },
  continueBtn: {
    marginHorizontal: 90,
    marginBottom: 10,
  },
  btnTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 20,
  },
});

export default NextRound;
