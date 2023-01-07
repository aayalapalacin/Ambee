import { MOVIES_OF_THE_NIGHT_API_KEY, TEST, MOVIES_API_KEY } from "@env";

const movieKey = {
  MOVIES_OF_THE_NIGHT_API_KEY,
};
const movieKey1 = {
  MOVIES_API_KEY,
};

const movieTest = {
  TEST,
};
export default __DEV__ ? movieKey : movieKey1;
