import React, { useState, useEffect } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { Button, Card, Title, RadioButton } from "react-native-paper";
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

  const checked3Status = () => {
    if (checked3 == false) {
      return "contained-tonal";
    } else {
      return "contained";
    }
  };
  const checked5Status = () => {
    if (checked5 == false) {
      return "contained-tonal";
    } else {
      return "contained";
    }
  };
  const checked7Status = () => {
    if (checked7 == false) {
      return "contained-tonal";
    } else {
      return "contained";
    }
  };
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
              style={styles.genreBtn}
              mode={checked7Status()}
              onPress={() => {
                if (checked7 == true) {
                  setChecked7(false);
                } else if (checked7 == false) {
                  setChecked7(true);
                  setChecked3(false);
                  setChecked5(false);
                  setUserNumOfMovies(numOfMovies[2]);
                }
              }}
            >
              <Text style={styles.genreBtnTxt}>{numOfMovies[2]}</Text>
            </Button>
          </View>
          <View style={styles.mid}>
            <Button
              style={styles.genreBtn}
              mode={checked5Status()}
              onPress={() => {
                if (checked5 == true) {
                  setChecked5(false);
                } else if (checked5 == false) {
                  setChecked5(true);
                  setChecked3(false);
                  setChecked7(false);
                  setUserNumOfMovies(numOfMovies[1]);
                }
              }}
            >
              <Text style={styles.genreBtnTxt}>{numOfMovies[1]}</Text>
            </Button>
          </View>
          <View style={styles.low}>
            <Button
              style={styles.genreBtn}
              mode={checked3Status()}
              onPress={() => {
                if (checked3 == true) {
                  setChecked3(false);
                } else if (checked3 == false) {
                  setChecked3(true);
                  setChecked5(false);
                  setChecked7(false);
                  setUserNumOfMovies(numOfMovies[0]);
                }
              }}
            >
              <Text style={styles.genreBtnTxt}>{numOfMovies[0]}</Text>
            </Button>
          </View>
        </View>
      </Card.Content>

      <TouchableOpacity
        onPress={() => {
          if (userNumOfMovies == "") {
            Alert.alert("Please Choose One");
          } else {
            if (checked3 == false && checked5 == false && checked7 == false) {
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
