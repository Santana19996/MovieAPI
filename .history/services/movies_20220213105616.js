const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
// You can use this as a starter for your service

class MovieService {
  constructor() {
    this.apiKey = process.env.API_KEY;
  }

  generateFetchUrl(query) {
    return `https://imdb-api.com/API/${query}/${this.apiKey}`;
  }

  // what is "this" refering to

  // Its the same as Java, this refers to the current class
  // right

  // You can refernece the methods on the class with 'this'
  // So to reference the method below you can call this.fetchMovies();

  async fetchMoviesByTerm() {
    axios
      .get(this.generateFetchUrl(""))
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("ERROR", err);
        return err;
      });
  }

  async fetchPopularMovies() {
    axios
      .get(this.generateFetchUrl("MostPopularMovies"))
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("ERROR", err);
        return err;
      });
  }
  //
  get getMovies() {
    return this.fetchPopularMovies();
  }
}

modules.default =
// what is this^^
// reference line 18
