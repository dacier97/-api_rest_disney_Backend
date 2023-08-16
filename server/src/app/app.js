const express = require("express");
const router = require("../router/charactersRouter");
const app = express();
const morgan = require("morgan");

const bodyParser = require("body-parser");
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("this is express app");
});

app.use("/api/v1", router);

module.exports = app;
