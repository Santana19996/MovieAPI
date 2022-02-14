const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
// You can use this as a starter for your service

export default class MovieService {
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
      .get(this.generateFetchUrl("Query goes here"))
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("ERROR", err);
        return err;
      });
  }

  async fetchMovies() {
    axios
      .get(this.fetchUrl)
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
    return this.fetchMovies();
  }
}
// what is this^^
// reference line 18
