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

  async fetchMoviesByTerm(searchTerm) {
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
    return new Promise((resolve, reject) => {
      axios
        .get(this.generateFetchUrl("MostPopularMovies"))
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          console.log("ERROR", err);
          reject(err);
        });
    });
  }

  // Should seach query be entered as param in function?
  async fetchMovieSearchByTerm(query) {
    return new Promise((resolve, reject) => {
      axios
        // .get(this.generateFetchUrl(`SearchMovies/${query}`))??
        .get(this.generateFetchUrl(`SearchMovie/${query}/${this.apiKey}`))
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          console.log("ERROR", err);
          reject(err);
        });
    });
  }

  get getMovies() {
    let popMovies = this.fetchPopularMovies();
    console.log(popMovies);
    return popMovies;
  }

  getMovieSearch(searchTerm) {
    let searchMovie = this.fetchMovieSearchByTerm(searchTerm);
    return searchMovie;
  }
}

exports.default = MovieService;

//
