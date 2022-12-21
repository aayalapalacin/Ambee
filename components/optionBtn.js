import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import React, { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
const genres = [
  { name: "horror ", key: 1 },
  { name: "comedy ", key: 2 },
  { name: "doc ", key: 3 },
  { name: "sci-fi ", key: 4 },
  { name: "anime ", key: 5 },
  { name: "musical ", key: 6 },
  { name: "action ", key: 7 },
  { name: "romantic ", key: 8 },
];
const OptionBtn = ({ selectedGenres, setSelectedGenres }) => {
  useEffect(() => {
    console.log(selectedGenres, "selectedGenres");
  }, [selectedGenres]);
  const deleteGenre = (key) => {
    const newGenreList = selectedGenres.filter((genre) => {
      return genre.key !== key;
    });
    setSelectedGenres(newGenreList);
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Biography", value: "biography", key: "1" },
    { label: "Film Noir", value: "Film Noir", key: "2" },
    { label: "Game Show", value: "Game Show", key: "3" },
    { label: " Musical", value: "Musical", key: "4" },
    { label: " Sport", value: "Sport", key: "5" },
    { label: " Short", value: "Short", key: "6" },
    { label: " Adult", value: "Adult", key: "7" },
    { label: " Fantasy", value: "Fantasy", key: "14" },
    { label: " Adventure", value: "Adventure", key: "12" },
    { label: " Animation", value: "Animation", key: "16" },
    { label: "Drama", value: "Drama", key: "18" },
    { label: " Horror", value: "Horror", key: "27" },
    { label: " Action", value: "Action", key: "28" },
    { label: " Comedy", value: "Comedy", key: "35" },
    { label: " History", value: "History", key: "36" },
    { label: " Western", value: "Western", key: "37" },
    { label: " Thriller", value: "Thriller", key: "53" },
    { label: " Crime", value: "Crime", key: "80" },
    { label: " Documentary", value: "Documentary", key: "99" },
    { label: "Science Fiction", value: "Science Fiction", key: "878" },
    { label: "Mystery", value: "Mystery", key: "9648" },
    { label: "Romance", value: "Romance", key: "10749" },
    { label: "Reality", value: "Reality", key: "10764" },
    { label: "Music", value: "Music", key: "10402" },
    { label: "Family", value: "Family", key: "10751" },
    { label: "War", value: "War", key: "10752" },
    { label: "News", value: "News", key: "10763" },
    { label: "Talk Show", value: "Talk Show", key: "10767" },
  ]);

  return (
    <View style={styles.optionBtnContainer}>
      <DropDownPicker
        multiple={true}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
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
    wkeyth: 110,
    marginVertical: 19,
    marginHorizontal: 9,
    paddingVertical: 7,
  },
  genreTxt: {
    fontSize: 17,
  },
  optionBtnContainer: {
    marginBottom: 80,
  },
});
