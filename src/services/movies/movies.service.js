// import { MOVIES_OF_THE_NIGHT_API_KEY } from "react-native-dotenv";
// ApiClient.init(MOVIES_OF_THE_NIGHT_API_KEY);
// console.log(MOVIES_OF_THE_NIGHT_API_KEY, "movie api");
const movieGenresToID = {
  Biography: "1",
  "Film Noir": "2",
  "Game Show": "3",
  Musical: "4",
  Sport: "5",
  Short: "6",
  Adult: "7",
  Adventure: "12",
  Fantasy: "14",
  Animation: "16",
  Drama: "18",
  Horror: "27",
  Action: "28",
  Comedy: "35",
  History: "36",
  Western: "37",
  Thriller: "53",
  Crime: "80",
  Documentary: "99",
  "Science Fiction": "878",
  Mystery: "9648",
  Music: "10402",
  Romance: "10749",
  Family: "10751",
  War: "10752",
  News: "10763",
  Reality: "10764",
  "Talk Show": "10767",
};

export const movieService = async () => {
  const api_key = `${process.env.MOVIES_OF_THE_NIGHT_API_KEY}`;
  const service = "netflix";
  const genreID = "18";
  const country = "us";
  const type = "movie";
  const initialRequestURL = `https://streaming-availability.p.rapidapi.com/search/basic?rapidapi-key=${api_key}&service=${service}&genre=${genreID}&country=${country}&type=${type}`; //&keyword=${movie}`;

  const initalPromise = await fetch(initialRequestURL);
  const response = await initalPromise.json();
  // const totalPages = response.total_pages;
  const results = response.results;
  // const results = [];

  // for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
  // const currentRequestURL = initialRequestURL + `&page=${currentPage}`;
  // const currentPromise = await fetch(currentRequestURL);
  // const currentResponse = await currentPromise.json();
  // const pageOfMovies = currentResponse.results;
  // results.push(...pageOfMovies);
  // }
  // console.log("herro");
  // console.log("results.length: ", results.length);
  // console.log("totalPages: ", totalPages);

  return results;
};
