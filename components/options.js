import * as React from "react";
import { Button } from "react-native-paper";

const genres = ["horror", "comedy", "documentary", "sci-fi", "anime"];

const Options = () => {
  return genres.map((genre, index) => (
    <Button
      key={index}
      icon=""
      compact={true}
      mode="contained"
      onPress={() => console.log("Pressed")}
    >
      {genre}
    </Button>
  ));
};

export default Options;
