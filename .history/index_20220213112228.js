const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const axios = require("axios");
const MovieService = require("./services/movies").default;
// Import the routes

const authRoute = require("./routes/auth");
const dummyRoute = require("./routes/dummy");

const movieService = new MovieService();

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("Connected to MongoDB")
);

// Middlewares
// Body Parser
app.use(express.json());

// Route Middlewares

// API DOESNT SUPPORT LIMIT Looking for work around

app.use("/api/user", authRoute);
// app.use("/api/dummy", dummyRoute);
//  No, Give me a zoom link
//
console.log(movieService.getMovies);

app.get("/", (req, res) => {
  console.log("ServiceLog", MovieService.getMovies);
  MovieService.getMovies;
});

app.listen(3000, () => {
  console.log("Server is running");
});
// Keep it up buddy > Sam
