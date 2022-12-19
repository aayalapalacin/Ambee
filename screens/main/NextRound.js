import React, { useState, useEffect } from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  FlatList,
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
      console.log(userGenreValue, "userGenre");
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
            source={require("../../assets/icons/Jump.png")}
          />
        </View>
        <Title style={styles.cardTitle}>Next Round</Title>
        <Paragraph style={styles.cardParagraph}>
          {username}, You have {userNum} cards left! You're doing great! Your
          Genres are:{" "}
          {userGenre.map((item) => (
            <View key={item.key}>
              <Text style={styles.genreTxt}>{item.name}</Text>
            </View>
          ))}
          {/* <FlatList
            data={userGenre}
            renderItem={({ item }) => (
              <View>
                <Text>{item.name}</Text>
              </View>
            )}
          /> */}
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
    height: 300,
    width: 270,
  },
  picContainer: {
    alignItems: "center",
    marginTop: 70,
  },
});

export default NextRound;
