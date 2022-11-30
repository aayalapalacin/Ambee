const { formToJSON } = require("axios");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const movie_api = require("./api/movies-of-the-night");

require("dotenv").config();

const PORT = process.env.PORT || 3005;

const app = express();

// adding Helmat to enhace REST API's security
app.use(helmet());

// adding Morgan to log HTTP requests
app.use(morgan("dev"));

app.get("/", (req, res) => {
  console.log(movie_api.get());
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
