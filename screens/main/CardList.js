// import { is } from "@react-spring/shared";
import React, { useContext } from "react";
import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import TinderCard from "react-tinder-card";
// import { movieService } from "../../src/services/movies/movies.service";
import { MovieContext } from "../../src/services/movies/movies.context";
import ContinueBtn from "../../components/continueBtn";

function CardList({ navigation, data, onFinish }) {
  const { movies, isLoading, onNextRound, isNextRoundReady } =
    useContext(MovieContext);
  const nextRoundMovies = [];

  const swiped = (direction, movie, index) => {
    console.log(direction, index, movies.length);
    if (direction.toLowerCase() === "right") {
      nextRoundMovies.push({ ...movie });

      console.log("next movies", nextRoundMovies.length);
    }
    if (index === 0) {
      // setNextRoundMovies([...movies]);
      // setMovies(
      //   movies.filter((currentMovie) => currentMovie in nextRoundMovies)
      // );
      // need to bring in function from movie context and call it here where we pass in next round movies and in that function definition
      // we will pass that new array of movies to setMovies.
      onNextRound(nextRoundMovies);
    }
  };

  const outOfFrame = (title) => {
    console.log(title + " left the screen!");
    nextRoundMovies = movies.filter((movie) => movie.title !== title);
    setMovies(nextRoundMovies);
  };

  if (isLoading) {
    return null;
  }

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      {!isLoading && (
        <View style={styles.cardContainer}>
          {movies.map((movie, index) => (
            <TinderCard
              flickOnSwipe={true}
              key={index}
              // onSwipe={(dir) => swiped(dir, movie.title)}
              // onSwipe={(dir) => swiped(dir, movie.title, movie, index)}
              onSwipe={(dir) => swiped(dir, movie, index)}
              preventSwipe={["up", "down"]}
            >
              <View style={styles.card}>
                <ImageBackground
                  style={styles.cardImage}
                  source={{
                    uri: movie.posterURLs.original,
                  }}
                ></ImageBackground>
              </View>
            </TinderCard>
          ))}
        </View>
      )}
      {isNextRoundReady && (
        <>
          <TouchableOpacity onPress={() => navigation.navigate("NextRound")}>
            <ContinueBtn text="Next" />
          </TouchableOpacity>
        </>
      )}
    </View>
    // </SafeAreaView>
  );
}

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
    maxWidth: 185,
    height: 278,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 20,
    resizeMode: "contain",
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

export default CardList;
