import React, { useContext, useEffect, useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import TinderCard from "react-tinder-card";
import { StackActions, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { movieService } from "../../src/services/movies/movies.service";
import { MovieContext } from "../../src/services/movies/movies.context";
import ContinueBtn from "../../components/continueBtn";

function CardList({ navigation, data, onFinish }) {
  const [userNum, setUserNum] = useState(0);

  const getData = async () => {
    try {
      const userNumValue = await AsyncStorage.getItem("@userNum");

      setUserNum(parseInt(userNumValue));
    } catch (e) {
      console.log(e);
    }
  };

  getData();

  console.log(userNum, "userNum");
  const { movies, isLoading, onNextRound, isNextRoundReady } =
    useContext(MovieContext);
  for (let i = 0; i < movies.length; i++) {
    // console.log(movies.length, "pop before");

    if (movies.length > userNum && userNum != 0) {
      movies.pop();
    }
  }
  const nextRoundMovies = [];
  const [nextRender, setNextRender] = useState(true);
  const swiped = (direction, movie, index) => {
    // console.log(direction.toLowerCase(), "movie swiped");
    if (direction.toLowerCase() === "right") {
      nextRoundMovies.push({ ...movie });
    } else {
      // console.log(movie + " swiped left");
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

  const handleNextRender = () => {
    console.log("test");
    setNextRender(!nextRender);
  };
  useEffect(() => {
    console.log("run", onNextRound);
    handleNextRender();
  }, [onNextRound]);

  const outOfFrame = (title) => {
    console.log(title + " left the screen!");
    nextRoundMovies = movies?.filter((movie) => movie.title !== title);
    setMovies(nextRoundMovies);
  };

  if (isLoading) {
    return null;
  }

  if (movies?.length === 1) {
    const pushAction = StackActions.push("ChosenCard", { movie: movies[0] });
    navigation.dispatch(pushAction);
  }

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      {!isLoading && (
        <View style={styles.cardContainer}>
          {movies?.map((peli, index) => {
            if (peli && peli.posterURLs) {
              return (
                <TinderCard
                  flickOnSwipe={true}
                  key={index}
                  // onSwipe={(dir) => swiped(dir, peli.title, peli, index)}
                  onSwipe={(dir) => swiped(dir, peli, index)}
                  preventSwipe={["up", "down"]}
                >
                  <View style={styles.card}>
                    <ImageBackground
                      resizeMode="contain"
                      style={styles.cardImage}
                      source={{
                        uri:
                          peli?.posterURLs["original"] == undefined
                            ? "https://image.tmdb.org/t/p/original/j18021qCeRi3yUBtqd2UFj1c0RQ.jpg"
                            : peli?.posterURLs["original"],
                      }}
                    ></ImageBackground>
                  </View>
                </TinderCard>
              );
            }
          })}

          {nextRender && (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate("NextRound")}
              >
                <ContinueBtn text="Next" />
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
      <View style={styles.swipeContainer}>
        <View style={styles.yesNoIcon}>
          <Image
            style={styles.swipeIcons}
            source={require("../../assets/icons/swipe-left.png")}
            resizeMode="contain"
          />
          <Text style={styles.leftIconTxt}>No</Text>
        </View>
        <View style={styles.yesNoIcon}>
          <Text style={styles.rightIconText}>Yes</Text>
          <Image
            style={styles.swipeIcons}
            source={require("../../assets/icons/swipe-right.png")}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
    // </SafeAreaView>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // width: "100%",

    height: "110%",
  },

  swipeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // marginTop: "18%",
  },
  yesNoIcon: {
    flexDirection: "row",
    justifyContent: "center",
    marginRight: "5%",
    // marginTop: 15,
    // marginBottom: "5%",
  },
  leftIconTxt: {
    marginEnd: "12%",
    fontSize: 28,
    paddingStart: "2%",
  },
  rightIconText: {
    fontSize: 28,
    paddingEnd: "1.5%",
  },

  swipeIcons: {
    width: 33,
    height: 33,
    // marginTop: 3,
    tintColor: "#8570D8",
  },
  cardContainer: {
    // top: 50,
    width: "100%",
    maxWidth: "87%",
    height: "103%",
  },
  card: {
    position: "absolute",
    width: "100%",
    height: 420,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 20,
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
