import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import { Button, Card, Title } from "react-native-paper";
import HomeSettings from "../../components/homeSettings";
import { Ionicons } from "@expo/vector-icons";
import CountDown from "react-native-countdown-component";
import Simple from "./CardList";

const YesNoCard = ({ navigation }) => {
  const window = useWindowDimensions();
  const [reset, setReset] = useState("1");
  return (
    <Card style={styles.container} height={window.height}>
      <Card.Content style={styles.cardContainer}>
        <Title style={styles.cardTitle}>
          What kind of movie would you like to watch?
        </Title>
        <View style={styles.cardTopIcons}>
          <View>
            <Ionicons name="arrow-undo-outline" size={33} color="#8570D8" />
          </View>
          <CountDown
            id={reset}
            size={17}
            until={30}
            onFinish={() => {
              // alert("Finished");
              // setReset(Math.random());
              // console.log(reset);
            }}
            digitStyle={{
              backgroundColor: "#8570D8",
              width: 46,
              height: 35,
              borderRadius: 30,
            }}
            digitTxtStyle={{ color: "white" }}
            timeLabelStyle={{ color: "green", fontWeight: "bold" }}
            separatorStyle={{ color: "#8570D8" }}
            timeToShow={["S"]}
            timeLabels={{ s: null }}
            showSeparator
          />
          <View style={styles.watchBtn}>
            <Button onPress={() => navigation.navigate("NextRound")}>
              Watch Now
            </Button>
          </View>
        </View>
        <View style={styles.picContainer}>
          <Simple />
          {/* <Card.Cover
            style={styles.cardPic}
            source={{ uri: "https://picsum.photos/700" }}
            resizeMode="contain"
          /> */}
        </View>
        <View style={styles.swipeContainer}>
          <View style={styles.yesNoIcon}>
            <Image
              style={styles.swipeIcons}
              source={require("../../assets/icons/swipe-left.png")}
              resizeMode="contain"
            />
            <Text style={styles.leftIconTxt}>No</Text>
          </View>
          <View style={styles.yesNoIcon}>
            <Text style={styles.rightIconText}>Yes</Text>
            <Image
              style={styles.swipeIcons}
              source={require("../../assets/icons/swipe-right.png")}
              resizeMode="contain"
            />
          </View>
        </View>
      </Card.Content>
      <HomeSettings navigation={navigation} />
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
  picContainer: {
    marginHorizontal: 15,
  },
  cardTitle: {
    textAlign: "center",
    marginHorizontal: 10,
    marginVertical: 30,
    fontFamily: "Mali-Bold",
    fontSize: 27.9,
  },
  watchBtn: {
    marginHorizontal: 0,
    borderWidth: 1.5,
    borderRadius: 13,
    borderColor: "#8570D8",
  },
  cardTopIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 17,
  },
  cardPic: {
    height: 325,
  },
  swipeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  yesNoIcon: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 25,
  },
  leftIconTxt: {
    marginEnd: 40,
    fontSize: 28,
    paddingStart: 8.5,
  },
  rightIconText: {
    fontSize: 28,
    paddingEnd: 5,
  },

  swipeIcons: {
    width: 33,
    height: 33,
    marginTop: 3,
    tintColor: "#8570D8",
  },
});

export default YesNoCard;
