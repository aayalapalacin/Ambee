import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import React, { useState, useEffect } from "react";

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
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const [clicked6, setClicked6] = useState(false);
  const [clicked7, setClicked7] = useState(false);
  const [clicked8, setClicked8] = useState(false);

  useEffect(() => {
    console.log(selectedGenres, "selectedGenres");
  }, [selectedGenres]);
  const deleteGenre = (key) => {
    const newGenreList = selectedGenres.filter((genre) => {
      return genre.key !== key;
    });
    setSelectedGenres(newGenreList);
  };
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
            if (clicked1 == true) {
              setClicked1(false);
              deleteGenre(genres[0].key);
            } else if (clicked1 == false) {
              setClicked1(true);
              setSelectedGenres([...selectedGenres, genres[0]]);
            }
          }}
        >
          <Text style={styles.genreTxt}>{genres[0].name}</Text>
        </Button>
        <Button
          style={styles.genreDiv}
          mode={clicked2Status()}
          onPress={() => {
            if (clicked2 == true) {
              setClicked2(false);

              deleteGenre(genres[1].key);
            } else if (clicked2 == false) {
              setClicked2(true);
              setSelectedGenres([...selectedGenres, genres[1]]);
            }
          }}
        >
          <Text style={styles.genreTxt}>{genres[1].name}</Text>
        </Button>
        <Button
          style={styles.genreDiv}
          mode={clicked3Status()}
          onPress={() => {
            if (clicked3 == true) {
              setClicked3(false);
              deleteGenre(genres[2].key);
            } else if (clicked3 == false) {
              setClicked3(true);
              setSelectedGenres([...selectedGenres, genres[2]]);
            }
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
            if (clicked4 == true) {
              setClicked4(false);
              deleteGenre(genres[3].key);
            } else if (clicked4 == false) {
              setClicked4(true);
              setSelectedGenres([...selectedGenres, genres[3]]);
            }
          }}
        >
          <Text style={styles.genreTxt}>{genres[3].name}</Text>
        </Button>
        <Button
          style={styles.genreDiv}
          mode={clicked5Status()}
          onPress={() => {
            if (clicked5 == true) {
              setClicked5(false);
              deleteGenre(genres[4].key);
            } else if (clicked5 == false) {
              setClicked5(true);
              setSelectedGenres([...selectedGenres, genres[4]]);
            }
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
            if (clicked6 == true) {
              setClicked6(false);
              deleteGenre(genres[5].key);
            } else if (clicked6 == false) {
              setClicked6(true);
              setSelectedGenres([...selectedGenres, genres[5]]);
            }
          }}
        >
          <Text style={styles.genreTxt}>{genres[5].name}</Text>
        </Button>
        <Button
          style={styles.genreDiv}
          mode={clicked7Status()}
          onPress={() => {
            if (clicked7 == true) {
              setClicked7(false);
              deleteGenre(genres[6].key);
            } else if (clicked7 == false) {
              setClicked7(true);
              setSelectedGenres([...selectedGenres, genres[6]]);
            }
          }}
        >
          <Text style={styles.genreTxt}>{genres[6].name}</Text>
        </Button>
        <Button
          style={styles.genreDiv}
          mode={clicked8Status()}
          onPress={() => {
            if (clicked8 == true) {
              setClicked8(false);
              deleteGenre(genres[7].key);
            } else if (clicked8 == false) {
              setClicked8(true);
              setSelectedGenres([...selectedGenres, genres[7]]);
            }
          }}
        >
          <Text style={styles.genreTxt}>{genres[7].name}</Text>
        </Button>
      </View>
      <Button onPress={() => setSelectedGenres([])}>empty genre state</Button>
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
