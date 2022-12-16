import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import React, { useState } from "react";

const genres = [
  { name: "horror ", mode: "contained-tonal", key: 1 },
  { name: "comedy ", mode: "contained-tonal", key: 2 },
  { name: "doc ", mode: "contained-tonal", key: 3 },
  { name: "sci-fi ", mode: "contained-tonal", key: 4 },
  { name: "anime ", mode: "contained-tonal", key: 5 },
  { name: "musical ", mode: "contained-tonal", key: 6 },
  { name: "action ", mode: "contained-tonal", key: 7 },
  { name: "romantic ", mode: "contained-tonal", key: 8 },
];
const OptionBtn = ({ selectedGenres, setSelectedGenres }) => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const [clicked6, setClicked6] = useState(false);
  const [clicked7, setClicked7] = useState(false);
  const [clicked8, setClicked8] = useState(false);

  const clicked1Status = () => {
    if (clicked1 == false) {
      return "contained-tonal";
    } else {
      return "contained";
    }
  };
  const clicked2Status = () => {
    if (clicked2 == false) {
      return "contained-tonal";
    } else {
      return "contained";
    }
  };
  const clicked3Status = () => {
    if (clicked3 == false) {
      return "contained-tonal";
    } else {
      return "contained";
    }
  };
  const clicked4Status = () => {
    if (clicked4 == false) {
      return "contained-tonal";
    } else {
      return "contained";
    }
  };
  const clicked5Status = () => {
    if (clicked5 == false) {
      return "contained-tonal";
    } else {
      return "contained";
    }
  };
  const clicked6Status = () => {
    if (clicked6 == false) {
      return "contained-tonal";
    } else {
      return "contained";
    }
  };
  const clicked7Status = () => {
    if (clicked7 == false) {
      return "contained-tonal";
    } else {
      return "contained";
    }
  };
  const clicked8Status = () => {
    if (clicked8 == false) {
      return "contained-tonal";
    } else {
      return "contained";
    }
  };
  return (
    <View style={styles.optionBtnContainer}>
      <View style={styles.genreContainer}>
        <Button
          style={styles.genreDiv}
          mode={clicked1Status()}
          onPress={() => {
            setClicked1(!clicked1);
            if (clicked1) {
              setSelectedGenres([...selectedGenres, genres[0].name]);
            }
            console.log(selectedGenres);
            // genres[0]["mode"] = "contained";
            // setSelectedGenres([...selectedGenres, genres[0].name]);
          }}
        >
          <Text style={styles.genreTxt}>{genres[0].name}</Text>
        </Button>
        <Button
          style={styles.genreDiv}
          mode={clicked2Status()}
          onPress={() => {
            setClicked2(!clicked2);
            // setSelectedGenres([...selectedGenres, genres[1].name])
          }}
        >
          <Text style={styles.genreTxt}>{genres[1].name}</Text>
        </Button>
        <Button
          style={styles.genreDiv}
          mode={clicked3Status()}
          onPress={() => {
            setClicked3(!clicked3);
            // setSelectedGenres([...selectedGenres, genres[2].name])
          }}
        >
          <Text style={styles.genreTxt}>{genres[2].name}</Text>
        </Button>
      </View>
      <View style={styles.genreContainer}>
        <Button
          style={styles.genreDiv}
          mode={clicked4Status()}
          onPress={() => {
            setClicked4(!clicked4);

            // setSelectedGenres([...selectedGenres, genres[3].name])
          }}
        >
          <Text style={styles.genreTxt}>{genres[3].name}</Text>
        </Button>
        <Button
          style={styles.genreDiv}
          mode={clicked5Status()}
          onPress={() => {
            setClicked5(!clicked5);

            // setSelectedGenres([...selectedGenres, genres[4].name])
          }}
        >
          <Text style={styles.genreTxt}>{genres[4].name}</Text>
        </Button>
      </View>
      <View style={styles.genreContainer}>
        <Button
          style={styles.genreDiv}
          mode={clicked6Status()}
          onPress={() => {
            setClicked6(!clicked6);

            // setSelectedGenres([...selectedGenres, genres[5].name])
          }}
        >
          <Text style={styles.genreTxt}>{genres[5].name}</Text>
        </Button>
        <Button
          style={styles.genreDiv}
          mode={clicked7Status()}
          onPress={() => {
            setClicked7(!clicked7);

            // setSelectedGenres([...selectedGenres, genres[6].name])
          }}
        >
          <Text style={styles.genreTxt}>{genres[6].name}</Text>
        </Button>
        <Button
          style={styles.genreDiv}
          mode={clicked8Status()}
          onPress={() => {
            setClicked8(!clicked8);

            // setSelectedGenres([...selectedGenres, genres[7].name])
          }}
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
    width: 110,
    marginVertical: 19,
    marginHorizontal: 9,
    paddingVertical: 7,
  },
  genreTxt: {
    fontSize: 20,
  },
  optionBtnContainer: {
    marginBottom: 80,
  },
});
