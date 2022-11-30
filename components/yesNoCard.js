import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const YesNoCard = ({ navigation }) => (
  <Card>
    {/* <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        /> */}
    <Card.Content>
      <Title style={styles.cardTitle}>
        What kind of movie would you like to watch?
      </Title>
      <View style={styles.cardTopIcons}>
        <EvilIcons name="undo" size={40} color="black" style={styles.undo} />
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
          <MaterialCommunityIcons
            name="gesture-swipe-left"
            size={28}
            color="black"
          />
          <Text style={styles.leftIconTxt}>No</Text>
        </View>
        <View style={styles.yesNoIcon}>
          <Text style={styles.rightIconText}>Yes</Text>
          <MaterialCommunityIcons
            name="gesture-swipe-right"
            size={28}
            color="black"
          />
        </View>
      </View>
      <View style={styles.homeSettingContainer}>
        <View>
          <Feather name="home" size={33} color="black" title="No" />
          <Text>Home</Text>
        </View>
        <View style={styles.homeSettingBox}>
          <Feather name="settings" size={33} color="black" />
          <Text>Settings</Text>
        </View>
      </View>

      {/* <Card.Actions>
            <Button onPress={() => navigation.navigate("MyButton")}>
              Go to Button
            </Button>
            <Button onPress={() => navigation.navigate("Home")}>Go to Home</Button>
          </Card.Actions> */}
    </Card.Content>
  </Card>
);
const styles = StyleSheet.create({
  cardTitle: {
    textAlign: "center",
    marginHorizontal: 50,
    marginVertical: 30,
  },
  cardTopIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardPic: {
    height: 350,
  },
  swipeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
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
  homeSettingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 80,
  },
  homeSettingBox: {
    alignItems: "center",
  },
});

export default YesNoCard;
