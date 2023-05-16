import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MovieContext } from "../src/services/movies/movies.context";

const HomeSettings = ({ navigation }) => {
  const { movies, setMovies, isLoading, onNextRound, isNextRoundReady } =
    useContext(MovieContext);
  return (
    <View style={styles.swipeContainer}>
      <View style={styles.yesNoIcon}>
        <Image
          style={styles.swipeIcons}
          source={require("../assets/icons/swipe-left.png")}
          resizeMode="contain"
        />
        <Text style={styles.leftIconTxt}>No</Text>
      </View>
      <View style={styles.yesNoIcon}>
        <Text style={styles.rightIconText}>Yes</Text>
        <Image
          style={styles.swipeIcons}
          source={require("../assets/icons/swipe-right.png")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default HomeSettings;

const styles = StyleSheet.create({
  swipeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "10%",
  },
  yesNoIcon: {
    flexDirection: "row",
    justifyContent: "center",
    marginRight: "5%",
  },
  leftIconTxt: {
    marginEnd: "12%",
    fontSize: 40,
    paddingStart: "5%",
  },
  rightIconText: {
    fontSize: 40,
    paddingEnd: "4.5%",
  },

  swipeIcons: {
    width: 48,
    height: 48,
    // marginTop: 3,
    tintColor: "#8570D8",
  },
});
