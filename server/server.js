const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const PORT = process.env.PORT || 3005;

const app = express();

// adding Helmat to enhace REST API's security
app.use(helmet());

// adding Morgan to log HTTP requests
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
