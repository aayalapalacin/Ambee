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
  const [userGenre, setUserGenre] = useState("");
  const [userNum, setUserNum] = useState("");
  const getData = async () => {
    try {
      const usernameValue = await AsyncStorage.getItem("@username");
      const userGenreValue = await AsyncStorage.getItem("@userGenres");
      const userNumValue = await AsyncStorage.getItem("@userNum");
      const userTimerValue = await AsyncStorage.getItem("@timerCount");

      if (usernameValue !== null) {
        setUsername(usernameValue);
        setUserGenre(JSON.parse(userGenreValue));
        setUserNum(userNumValue);
      } else {
        setUsername("You");
      }
    } catch (e) {
      console.log(e);
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
            resizeMode="cover"
            source={require("../../assets/icons/Jump.png")}
          />
        </View>
        <Title style={styles.cardTitle}>Next Round</Title>
        <Paragraph style={styles.cardParagraph}>
          {username}, You have {userNum} cards left! You're doing great!
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
  genreTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 23,
  },

  cardTitle: {
    textAlign: "center",
    marginVertical: "10%",
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },
  cardParagraph: {
    textAlign: "center",
    marginHorizontal: "5%",
    lineHeight: 30,
    fontFamily: "Mali-Regular",
    fontSize: 23,
    marginBottom: "8%",
    paddingTop: "1%",
  },
  cardPic: {
    height: 300,
    width: 270,
  },
  picContainer: {
    alignItems: "center",
    marginTop: "20%",
  },
});

export default NextRound;
