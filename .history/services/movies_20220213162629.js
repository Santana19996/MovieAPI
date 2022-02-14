const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

class MovieService {
  constructor() {
    this.apiKey = process.env.API_KEY;
  }

  generateFetchUrl(query) {
    return `https://imdb-api.com/API/${query}/${this.apiKey}`;
  }

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

  async fetchMovieSearchByTerm(searchTerm) {
    return new Promise((resolve, reject) => {
      axios
        .get(this.generateFetchUrl(`SearchMovie` + searchTerm))
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          console.log("ERROR", err);
          reject(err);
        });
    });
  }
  // ^^ sent request = https://imdb-api.com/API/SearchMovieterminator/k_rnsrqu4a>\

  // request neeeds to be

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
