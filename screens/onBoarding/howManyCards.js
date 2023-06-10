import React, { useState, useEffect } from "react";
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
  const [checked3, setChecked3] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked7, setChecked7] = useState(false);

  useEffect(() => {
    console.log(userNumOfMovies, "userNumOfMovies");
  }, [userNumOfMovies]);
  return (
    <Card height={window.height} style={styles.container}>
      <Card.Content>
        <Title style={styles.cardTitle}>
          How many movies would you like to start with?
        </Title>
        <View style={styles.btnContainer}>
          <View style={styles.top}>
            <Button
              style={styles.numOfMovie}
              mode={!checked7 ? "contained-tonal" : "contained"}
              onPress={() => {
                if (checked7) {
                  setChecked7(false);
                } else if (!checked7) {
                  setChecked7(true);
                  setChecked3(false);
                  setChecked5(false);
                  setUserNumOfMovies(numOfMovies[2]);
                }
              }}
            >
              <Text style={styles.numOfMovieTxt}>{numOfMovies[2]}</Text>
            </Button>
          </View>
          <View style={styles.mid}>
            <Button
              style={styles.numOfMovie}
              mode={!checked5 ? "contained-tonal" : "contained"}
              onPress={() => {
                if (checked5) {
                  setChecked5(false);
                } else if (!checked5) {
                  setChecked5(true);
                  setChecked3(false);
                  setChecked7(false);
                  setUserNumOfMovies(numOfMovies[1]);
                }
              }}
            >
              <Text style={styles.numOfMovieTxt}>{numOfMovies[1]}</Text>
            </Button>
          </View>
          <View style={styles.low}>
            <Button
              style={styles.numOfMovie}
              mode={!checked3 ? "contained-tonal" : "contained"}
              onPress={() => {
                if (checked3) {
                  setChecked3(false);
                } else if (!checked3) {
                  setChecked3(true);
                  setChecked5(false);
                  setChecked7(false);
                  setUserNumOfMovies(numOfMovies[0]);
                }
              }}
            >
              <Text style={styles.numOfMovieTxt}>{numOfMovies[0]}</Text>
            </Button>
          </View>
        </View>
      </Card.Content>

      <TouchableOpacity
        onPress={() => {
          if (userNumOfMovies == "") {
            Alert.alert("Please Choose One");
          } else {
            if (!checked3 && !checked5 && !checked7) {
              Alert.alert("Please Choose One");
            } else {
              navigation.navigate("YesNoCard");
              storeData(userNumOfMovies);
            }
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
    marginHorizontal: "1%",
  },
  cardTitle: {
    textAlign: "center",
    marginHorizontal: "1%",
    marginTop: "18%",
    marginBottom: "14%",
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },

  numOfMovie: {
    marginTop: "7%",
    padding: "10%",
  },

  numOfMovieTxt: {
    fontSize: 20,
  },
  genreContainer: {
    flexDirection: "row",
  },

  top: {
    alignItems: "flex-start",
  },
  mid: {
    alignItems: "flex-end",
  },
  low: {
    alignItems: "flex-start",
    marginBottom: "33%",
  },
  btnContainer: {
    marginHorizontal: "12%",
  },
});
export default HowManyCards;
