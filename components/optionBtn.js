import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import React from "react";

const genres = [
  { name: "horror", key: 1 },
  { name: "comedy", key: 2 },
  { name: "doc", key: 3 },
  { name: "sci-fi", key: 4 },
  { name: "anime", key: 5 },
  { name: "musical", key: 6 },
  { name: "action", key: 7 },
  { name: "romantic", key: 8 },
];
const OptionBtn = ({ selectedGenres, setSelectedGenres }) => {
  return (
    <View style={styles.optionBtnContainer}>
      <View style={styles.genreContainer}>
        <Button
          style={styles.genreDiv}
          compact={true}
          mode="contained"
          onPress={() => setSelectedGenres([...selectedGenres, genres[0].name])}
        >
          <Text style={styles.genreTxt}>{genres[0].name}</Text>
        </Button>
        <Button
          style={styles.genreDiv}
          compact={true}
          mode="contained"
          onPress={() => setSelectedGenres([...selectedGenres, genres[1].name])}
        >
          <Text style={styles.genreTxt}>{genres[1].name}</Text>
        </Button>
        <Button
          style={styles.genreDiv}
          compact={true}
          mode="contained"
          onPress={() => setSelectedGenres([...selectedGenres, genres[2].name])}
        >
          <Text style={styles.genreTxt}>{genres[2].name}</Text>
        </Button>
      </View>
      <View style={styles.genreContainer}>
        <Button
          style={styles.genreDiv}
          compact={true}
          mode="contained"
          onPress={() => setSelectedGenres([...selectedGenres, genres[3].name])}
        >
          <Text style={styles.genreTxt}>{genres[3].name}</Text>
        </Button>
        <Button
          style={styles.genreDiv}
          compact={true}
          mode="contained"
          onPress={() => setSelectedGenres([...selectedGenres, genres[4].name])}
        >
          <Text style={styles.genreTxt}>{genres[4].name}</Text>
        </Button>
      </View>
      <View style={styles.genreContainer}>
        <Button
          style={styles.genreDiv}
          compact={true}
          mode="contained"
          onPress={() => setSelectedGenres([...selectedGenres, genres[5].name])}
        >
          <Text style={styles.genreTxt}>{genres[5].name}</Text>
        </Button>
        <Button
          style={styles.genreDiv}
          compact={true}
          mode="contained"
          onPress={() => setSelectedGenres([...selectedGenres, genres[6].name])}
        >
          <Text style={styles.genreTxt}>{genres[6].name}</Text>
        </Button>
        <Button
          style={styles.genreDiv}
          compact={true}
          mode="contained"
          onPress={() => setSelectedGenres([...selectedGenres, genres[7].name])}
        >
          <Text style={styles.genreTxt}>{genres[7].name}</Text>
        </Button>
      </View>
    </View>
  );
};

export default OptionBtn;

const styles = StyleSheet.create({
  genreContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  genreDiv: {
    width: 100,
    marginVertical: 18,
    marginHorizontal: 9,
    paddingVertical: 6,
  },
  genreTxt: {
    fontSize: 19,
  },
  optionBtnContainer: {
    marginBottom: 80,
  },
});
