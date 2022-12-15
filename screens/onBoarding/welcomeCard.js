import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo";
const WelcomeCard = ({ navigation }) => {
  const window = useWindowDimensions();
  return (
    <Card style={styles.container} height={window.height}>
      <Card.Content>
        <View style={styles.picContainer}>
          <Card.Cover
            style={styles.cardPic}
            source={require("../../assets/icons/GroupWave.png")}
            resizeMode="contain"
          />
        </View>

        <Title style={styles.cardTitle}>Welcome to AmBee!</Title>
        <Paragraph style={styles.cardParagraph}>
          A place where you can get help making decisions without overthinking..
        </Paragraph>
      </Card.Content>
      <TouchableOpacity
        onPress={() => navigation.navigate("NameBee")}
        style={styles.arrowIconBox}
      >
        <View style={styles.arrowBorder}>
          <Image
            style={styles.arrowIcon}
            source={require("../../assets/icons/arrowCircleRight.png")}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
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
    lineHeight: 30,
    fontFamily: "Mali-Regular",
    fontSize: 22,
    marginBottom: 65,
    paddingTop: 2,
  },
  cardPic: {
    height: 190,
    width: 360,
  },
  picContainer: {
    alignItems: "center",
    marginTop: 80,
  },

  arrowIcon: {
    tintColor: "#FF6033",
    width: 70,
    height: 70,
  },
  arrowIconBox: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "none",
  },
  arrowBorder: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#FF6033",
  },
});

export default WelcomeCard;
