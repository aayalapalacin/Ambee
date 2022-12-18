import React, { useState } from "react";
import { Card, Title } from "react-native-paper";
import {
  StyleSheet,
  Alert,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import OptionBtn from "../../components/optionBtn";
import ContinueBtn from "../../components/continueBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Options = ({ navigation }) => {
  const window = useWindowDimensions();
  const [selectedGenres, setSelectedGenres] = useState([]);

  const storeData = async (value) => {
    console.log(value, "value");
    try {
      await AsyncStorage.setItem("@userGenres", JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card height={window.height} style={styles.container}>
      <Card.Content>
        <Title style={styles.cardTitle}>What type of movies do you like?</Title>
        <OptionBtn
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
      </Card.Content>
      <TouchableOpacity
        onPress={() => {
          if (selectedGenres.length == 0) {
            Alert.alert("Please Choose At Least One Genre");
          } else {
            navigation.navigate("HowManyCards");
            storeData(selectedGenres);
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
    marginHorizontal: 10,
    marginTop: 100,
    marginBottom: 50,
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },

  continueBtn: {
    marginHorizontal: 90,
    marginTop: 70,
  },
  btnTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 20,
  },
  genreContainer: {
    flexDirection: "row",
  },
  genreDiv: {
    width: 100,
  },
});
export default Options;
