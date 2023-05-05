import React, { useState, useEffect, useContext } from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import ContinueBtn from "../../components/continueBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MovieContext } from "../../src/services/movies/movies.context";
import { StackActions } from "@react-navigation/native";

const NextRound = ({ navigation }) => {
  console.log("NextRound!!!!!!!!!!!111");

  const window = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [userGenre, setUserGenre] = useState("");
  const [userNum, setUserNum] = useState("");
  const { movies, isLoading, onNextRound, isNextRoundReady } =
    useContext(MovieContext);
  const pushAction = StackActions.push("YesNoCard", { movies: movies });
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
    } catch (e) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container} height={window.height}>
      <View style={styles.cardContent}>
        <View style={styles.picContainer}>
          <Image
            style={styles.cardPic}
            resizeMode="cover"
            source={require("../../assets/icons/Jump.png")}
          />
        </View>
        <Title style={styles.cardTitle}>Next Round</Title>
        <Paragraph style={styles.cardParagraph}>
          {username}, You have {movies.length} cards left! You're doing great!
        </Paragraph>
      </View>
      <TouchableOpacity onPress={() => navigation.dispatch(pushAction)}>
        <ContinueBtn text="Continue" />
      </TouchableOpacity>
      {/* <HomeSettings navigation={navigation} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
  },
  cardContent: {
    alignItems: "center",
    height: "70%",
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
    height: "100%",
    width: "100%",
  },
  picContainer: {
    height: "44.5%",
    width: "66%",
    alignItems: "center",
    marginTop: "20%",
  },
});

export default NextRound;
