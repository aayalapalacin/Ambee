import env from "../../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const movieService = async () => {
  const userGenreValue = await AsyncStorage.getItem("@userGenres");
  const api_key = env.MOVIES_OF_THE_NIGHT_API_KEY;
  const service = "netflix";
  const genreID = JSON.parse(userGenreValue)[0].key;
  console.log(genreID, "genreID");
  const country = "us";
  const type = "movie";
  const initialRequestURL = `https://streaming-availability.p.rapidapi.com/search/basic?rapidapi-key=${api_key}&service=${service}&genre=${genreID}&country=${country}&type=${type}`; //&keyword=${movie}`;

  try {
    const resp = await fetch(initialRequestURL);

    const data = await resp.json();

    console.log("Test");
    return data.results;
  } catch (error) {
    console.error(error, "there has been an error during  log in");
  }

  return results;
};
