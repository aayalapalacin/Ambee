import React, { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { Button, Card, Title } from "react-native-paper";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import ContinueBtn from "../../components/continueBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const numOfMovies = ["3", "5", "7"];
const HowManyCards = ({ navigation }) => {
  const [userNumOfMovies, setUserNumOfMovies] = useState("");
  const window = useWindowDimensions();
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@userNum", value);
    } catch (e) {
      console.log(e);
    }
  };
  const validation = () => {
    return (
      <View style={styles.validationContainer}>
        <Text style={styles.validationTxt} variant="labelSmall">
          Label Small
        </Text>
      </View>
    );
  };
  return (
    <Card height={window.height} style={styles.container}>
      <Card.Content>
        <Title style={styles.cardTitle}>
          How many movies would you like to start with?
        </Title>
        <View style={styles.btnContainer}>
          <View style={styles.top}>
            <Button
              style={styles.genreBtn}
              mode="contained"
              onPress={() => setUserNumOfMovies(numOfMovies[2])}
            >
              <Text style={styles.genreBtnTxt}>{numOfMovies[2]}</Text>
            </Button>
          </View>
          <View style={styles.mid}>
            <Button
              style={styles.genreBtn}
              mode="contained"
              onPress={() => setUserNumOfMovies(numOfMovies[1])}
            >
              <Text style={styles.genreBtnTxt}>{numOfMovies[1]}</Text>
            </Button>
          </View>
          <View style={styles.low}>
            <Button
              style={styles.genreBtn}
              mode="contained"
              onPress={() => setUserNumOfMovies(numOfMovies[0])}
            >
              <Text style={styles.genreBtnTxt}>{numOfMovies[0]}</Text>
            </Button>
          </View>
        </View>
      </Card.Content>
      {validation}
      <TouchableOpacity
        onPress={() => {
          if (userNumOfMovies == "") {
            Alert.alert("Please Choose One");
          } else {
            navigation.navigate("YesNoCard");
            storeData(userNumOfMovies);
          }
        }}
      >
        <ContinueBtn text="Continue" />
      </TouchableOpacity>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    marginHorizontal: 5,
  },
  cardTitle: {
    textAlign: "center",
    marginHorizontal: 5,
    marginTop: 60,
    marginBottom: 50,
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },

  genreBtn: {
    marginTop: 20,
    padding: 23,
  },

  genreBtnTxt: {
    fontSize: 20,
  },
  genreContainer: {
    flexDirection: "row",
  },
  genreDiv: {
    width: 100,
  },
  top: {
    alignItems: "flex-start",
  },
  mid: {
    alignItems: "flex-end",
  },
  low: {
    alignItems: "flex-start",
    marginBottom: 75,
  },
  btnContainer: {
    marginHorizontal: 55,
  },
  validationContainer: {
    justifyContent: "center",
    textAlign: "center",
  },
  validationTxt: {
    color: "red",
  },
});
export default HowManyCards;
