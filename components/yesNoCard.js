import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const YesNoCard = ({ navigation }) => (
  <Card>
    <Card.Content style={styles.cardContainer}>
      <Title style={styles.cardTitle}>
        What kind of movie would you like to watch?
      </Title>
      <View style={styles.cardTopIcons}>
        <EvilIcons name="undo" size={48} color="black" style={styles.undo} />
        <Card.Actions>
          <Ionicons name="ios-timer-outline" size={40} color="black" />
          <Button>Start</Button>
        </Card.Actions>
      </View>
      <Card.Cover
        style={styles.cardPic}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <View style={styles.swipeContainer}>
        <View style={styles.yesNoIcon}>
          {/* <MaterialCommunityIcons
            name="gesture-swipe-left"
            size={28}
            color="black"
          /> */}
          <Image
            style={styles.swipeIcons}
            source={require("../assets/icons/swipe-left.png")}
            resizeMode="contain"
          />
          <Text style={styles.leftIconTxt}>No</Text>
        </View>
        <View style={styles.yesNoIcon}>
          <Text style={styles.rightIconText}>Yes</Text>
          <Image
            style={styles.swipeIcons}
            source={require("../assets/icons/swipe-right.png")}
            resizeMode="contain"
          />
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
    fontSize: 27.9,
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
  swipeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 80,
  },
  yesNoIcon: {
    flexDirection: "row",
    justifyContent: "center",
  },
  leftIconTxt: {
    marginEnd: 40,
    fontSize: 28,
    paddingStart: 5,
  },
  rightIconText: {
    fontSize: 28,
    paddingEnd: 5,
  },

  swipeIcons: {
    width: 33,
    height: 33,
    marginTop: 3,
    marginBottom: 85,
  },
});

export default YesNoCard;
