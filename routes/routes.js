import express from "express";
import { get } from "../server/api/movies-of-the-night.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  get().then((data) => {
    res.status(200).json({ data });
  });
});

export default router;
