import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const ChosenCard = ({ navigation }) => (
  <Card>
    <Card.Content style={styles.cardContainer}>
      <Title style={styles.cardTitle}>Here is your movie choice</Title>

      <Card.Cover
        style={styles.cardPic}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <Title style={styles.aboutTitleTxt}>About this movie</Title>
      <Paragraph style={styles.pTxt}>
        Lorem ipsum dolor sit amet consectetur. Volutpat euismod varius
        consectetur blandit nisl enim. Congue nibh leo turpis viverra ut dolor.
      </Paragraph>
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
    </Card.Content>
  </Card>
);
const styles = StyleSheet.create({
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
    height: 350,
  },
  homeSettingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 38,
    marginBottom: 25,
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
