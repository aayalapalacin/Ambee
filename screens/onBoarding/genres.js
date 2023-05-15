import React, { useState } from "react";
import { Card, Title } from "react-native-paper";
import {
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import ContinueBtn from "../../components/continueBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GenreDropdown from "../../components/genreDropdown";
import { movieService } from "../../src/services/movies/movies.service";

const Genres = ({ navigation }) => {
  const window = useWindowDimensions();
  const [selectedGenres, setSelectedGenres] = useState([]);

  const storeData = async (value) => {
    console.log(value, "store value genre");
    movieService();
    try {
      await AsyncStorage.setItem("@userGenres", JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View height={window.height} style={styles.container}>
      <View>
        <Title style={styles.cardTitle}>What type of movies do you like?</Title>
        <View style={styles.cardContent}>
          <View style={styles.picContainer}>
            <Image
              style={styles.cardPic}
              resizeMode="cover"
              source={require("../../assets/icons/watchTV.png")}
            />
          </View>
          <GenreDropdown
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
          />
        </View>
      </View>
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
  },
  cardContent: {
    alignItems: "center",
    height: "55%",
    marginHorizontal: "5%",
  },
  cardTitle: {
    textAlign: "center",
    marginHorizontal: "10%",
    marginTop: "12%",
    marginBottom: "4%",
    fontFamily: "Mali-Bold",
    fontSize: 32,
  },
  btnTxt: {
    fontFamily: "Mali-Regular",
    fontSize: 20,
  },
  picContainer: {
    width: "100%",
    height: "100%",
  },
  cardPic: {
    height: "100%",
  },
});
export default Genres;
