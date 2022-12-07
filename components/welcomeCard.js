import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo";
const WelcomeCard = () => (
  <Card>
    <Card.Content>
      <View style={styles.picContainer}>
        <Card.Cover
          style={styles.cardPic}
          source={{ uri: "https://picsum.photos/700" }}
        />
      </View>

      <Title style={styles.cardTitle}>Welcome to AmBee</Title>
      <Paragraph style={styles.cardParagraph}>
        Lorem ipsum dolor sit amet consectetur. Gravida ac eget in tincidunt
        mauris.
      </Paragraph>
    </Card.Content>
    <View style={styles.arrowIconBox}>
      <Image
        style={styles.arrowIcon}
        source={require("../assets/icons/arrowCircleRight.png")}
        resizeMode="contain"
      />
    </View>
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
    marginBottom: 65,
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

  arrowIcon: {
    tintColor: "grey",
    width: 60,
    height: 60,
  },
  arrowIconBox: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 125,
  },
});

export default WelcomeCard;
