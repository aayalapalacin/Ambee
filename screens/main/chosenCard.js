import * as React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import HomeSettings from "../../components/homeSettings";

const ChosenCard = ({ navigation }) => {
  const window = useWindowDimensions();
  return (
    <Card style={styles.container} height={window.height}>
      <Card.Content style={styles.cardContainer}>
        <Title style={styles.cardTitle}>Here is your movie choice</Title>

        <Card.Cover
          style={styles.cardPic}
          source={{ uri: "https://picsum.photos/700" }}
          resizeMode="contain"
        />
        <Title style={styles.aboutTitleTxt}>About this movie</Title>
        <Paragraph style={styles.pTxt}>
          Lorem ipsum dolor sit amet consectetur. Volutpat euismod varius
          consectetur blandit nisl enim. Congue nibh leo turpis viverra ut
          dolor.
        </Paragraph>
      </Card.Content>
      <HomeSettings />
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
  },
  cardContainer: {
    marginHorizontal: 10,
  },
  cardTitle: {
    textAlign: "center",
    marginHorizontal: 10,
    marginVertical: 30,
    fontFamily: "Mali-Bold",
    fontSize: 29,
  },
  cardTopIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardPic: {
    height: 300,
  },
  homeSettingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  homeSettingBox: {
    alignItems: "center",
  },
  homeContainer: {
    marginRight: 32,
  },
  homeSettingsTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 16,
  },
  aboutTitleTxt: {
    fontFamily: "Mali-Bold",
    paddingTop: 20,
  },
  pTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 18,
    paddingVertical: 20,
  },
});

export default ChosenCard;
