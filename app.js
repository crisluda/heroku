import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 6000;

app.get("/", (req, res) => {
  res.json({ app: "one" });
});

app.listen(port, () => {
  console.log(`app is runing on ${port}`);
});
