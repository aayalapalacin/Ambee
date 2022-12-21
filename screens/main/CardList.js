import React, { useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import TinderCard from "react-tinder-card";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  cardContainer: {
    // top: 50,
    width: "90%",
    maxWidth: 260,
    height: 300,
  },
  card: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 260,
    height: 300,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 20,
    resizeMode: "cover",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 20,
  },

  infoText: {
    height: 28,
    // marginTop: 10,
    justifyContent: "center",
    display: "flex",
    zIndex: -100,
  },
};

const db = [
  {
    name: "Richard Hendricks",
    img: require("../../assets/img/richard.jpg"),
  },
  {
    name: "Erlich Bachman",
    img: require("../../assets/img/erlich.jpg"),
  },
  {
    name: "Monica Hall",
    img: require("../../assets/img/monica.jpg"),
  },
  {
    name: "Jared Dunn",
    img: require("../../assets/img/jared.jpg"),
  },
  {
    name: "Dinesh Chugtai",
    img: require("../../assets/img/dinesh.jpg"),
  },
];

function Simple() {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    console.log("you swiped: " + direction);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      {/* <Text style={styles.header}>React Native Tinder Card</Text> */}

      <View style={styles.cardContainer}>
        {characters.map((character) => (
          <TinderCard
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <View style={styles.card}>
              <ImageBackground style={styles.cardImage} source={character.img}>
                {/* <Text style={styles.cardTitle}>{character.name}</Text> */}
              </ImageBackground>
            </View>
          </TinderCard>
        ))}
      </View>
      {/* {lastDirection ? (
        <Text style={styles.infoText}>You swiped {lastDirection}</Text>
      ) : (
        <Text style={styles.infoText} />
      )} */}
    </View>
    // </SafeAreaView>
  );
}

export default Simple;
