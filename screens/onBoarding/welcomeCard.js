import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
const WelcomeCard = ({ navigation }) => {
  const window = useWindowDimensions();
  return (
    <Card style={styles.container} height={window.height}>
      <Card.Content>
        <View style={styles.picContainer}>
          <Card.Cover
            style={styles.cardPic}
            source={require("../../assets/icons/AmbeeLogoTitleColor.png")}
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
    marginHorizontal: "5%",
    marginTop: "15%",
    marginBottom: "11%",
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },
  cardParagraph: {
    textAlign: "center",
    lineHeight: 30,
    fontFamily: "Mali-Regular",
    fontSize: 22,
    marginBottom: "17%",
  },
  cardPic: {
    height: "52%",
    width: "90%",
    // tintColor: "white",
  },
  picContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
    height: "30%",
    // backgroundColor: "red",
  },

  arrowIcon: {
    tintColor: "#FF6033",
    width: 90,
    height: 90,
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
