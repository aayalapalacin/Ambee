import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
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
      <Card.Actions>
        <EvilIcons name="undo" size={40} color="black" style={styles.undo} />
        <Ionicons name="ios-timer-outline" size={40} color="black" />
        <Button>Start</Button>
      </Card.Actions>
      <Card.Cover
        style={styles.cardPic}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <View style={styles.swipeContainer}>
        <View style={styles.yesNoIcon}>
          <MaterialCommunityIcons
            name="gesture-swipe-left"
            size={50}
            color="black"
          />
          <Text style={styles.leftIconTxt}>No</Text>
        </View>
        <View style={styles.yesNoIcon}>
          <Text style={styles.iconText}>Yes</Text>
          <MaterialCommunityIcons
            name="gesture-swipe-right"
            size={50}
            color="black"
          />
        </View>
      </View>
      <View style={styles.swipeContainer}>
        <View style={styles.yesNoIcon}>
          <Feather name="home" size={30} color="black" title="No" />
          <Text>No</Text>
        </View>
        <View>
          <Text>Yes</Text>
          <Feather name="settings" size={30} color="black" />
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
  },
  undo: {
    marginEnd: 0,
  },
  cardPic: {
    height: 350,
  },
  swipeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  yesNoIcon: {
    flexDirection: "row",
    justifyContent: "center",
  },
  leftIconTxt: {
    marginEnd: 20,
    fontSize: 20,
  },
});

export default YesNoCard;
