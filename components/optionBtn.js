import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const OptionBtn = ({ selectedGenres, setSelectedGenres }) => {
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
        style={styles.dropContainer}
        multiple={true}
        dropDownDirection="TOP"
        searchable={true}
        // min={0}
        // max={5}
        maxHeight={550}
        open={open}
        value={value}
        items={items}
        onPress={() => setSelectedGenres(value)}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        dropDownContainerStyle={{ borderColor: "#FF6033" }}
        listItemLabelStyle={{
          color: "#6750A4",
        }}
        placeholderStyle={{
          color: "#6750A4",
          fontWeight: "bold",
        }}
      />
    </View>
  );
};

export default OptionBtn;

const styles = StyleSheet.create({
  dropContainer: {
    borderRadius: 50,
    borderColor: "#FF6033",
    paddingHorizontal: 20,
  },
  genreContainer: {
    flexDirection: "row",
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
    marginTop: 235,
    marginBottom: 30,
    justifyContent: "center",
    alignContent: "center",
  },
});
