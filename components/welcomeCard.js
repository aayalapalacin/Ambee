import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo";
const WelcomeCard = () => {
  const window = useWindowDimensions();
  return (
    <Card style={styles.container} height={window.height}>
      <Card.Content>
        <View style={styles.picContainer}>
          <Card.Cover
            style={styles.cardPic}
            source={{ uri: "https://picsum.photos/700" }}
            resizeMode="contain"
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
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
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
    marginBottom: 65,
    paddingTop: 2,
  },
  cardPic: {
    height: 225,
    width: 225,
  },
  picContainer: {
    alignItems: "center",
    marginTop: 80,
  },

  arrowIcon: {
    tintColor: "grey",
    width: 60,
    height: 60,
  },
  arrowIconBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default WelcomeCard;
