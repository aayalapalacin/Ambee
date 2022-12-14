import React, { useState, useEffect } from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import ContinueBtn from "../../components/continueBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NextRound = ({ navigation }) => {
  const window = useWindowDimensions();
  const [username, setUsername] = useState("");
  const getData = async () => {
    try {
      const usernameValue = await AsyncStorage.getItem("@username");
      const userGenreValue = await AsyncStorage.getItem("@userGenres");
      console.log(userGenreValue, "userGenre");
      if (usernameValue !== null) {
        setUsername(usernameValue);
        // console.log(value, "storage value");
      } else {
        setUsername("You");
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card style={styles.container} height={window.height}>
      <Card.Content>
        <View style={styles.picContainer}>
          <Card.Cover
            style={styles.cardPic}
            source={{ uri: "https://picsum.photos/700" }}
          />
        </View>
        <Title style={styles.cardTitle}>Next Round</Title>
        <Paragraph style={styles.cardParagraph}>
          {username} have 2 cards left! You're doing great!
        </Paragraph>
      </Card.Content>
      <TouchableOpacity onPress={() => navigation.navigate("ChosenCard")}>
        <ContinueBtn text="Continue" />
      </TouchableOpacity>
      {/* <HomeSettings navigation={navigation} /> */}
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
    marginTop: 40,
    marginBottom: 40,
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },
  cardParagraph: {
    textAlign: "center",
    marginHorizontal: 45,
    fontFamily: "Mali-Regular",
    fontSize: 23,
    marginBottom: 50,
    paddingTop: 2,
  },
  cardPic: {
    height: 225,
    width: 225,
  },
  picContainer: {
    alignItems: "center",
    marginTop: 70,
  },
});

export default NextRound;
