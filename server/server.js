import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import router from "../routes/routes.js";

// This allows us to store our environment vars from .env into process.env.
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 3005;

const app = express();

// These are used to help parse response.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Adding Helmat to enhace REST API's security
app.use(helmet());

// Adding Morgan to log HTTP requests
app.use(morgan("dev"));

app.use(router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
