const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

// adding Helmat to enhace REST API's security
app.use(helmet());

// adding Morgan to log HTTP requests
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3005, () => {
  console.log("listening on port 3005!");
});
