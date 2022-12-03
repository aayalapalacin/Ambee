import axios from "axios";

export function get() {
  const api_key = `${process.env.MOVIES_OF_THE_NIGHT_API_KEY}`;
  const options = {
    headers: {
      "X-RapidAPI-Key": api_key,
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  let data = axios
    .get("https://streaming-availability.p.rapidapi.com/genres", options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return data;
}
