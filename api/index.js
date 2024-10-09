const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();
const port = 5000;
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
mongoose
  .connect("mongodb+srv://talalwissam5:admin@cluster0.abv61.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Connection Failed", err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
