const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
// You can use this as a starter for your service

export default class MovieService {
  constructor() {
    this.query = '';
    this.apiKey = process.env.API_KEY;
    this.fetchUrl = `https://imdb-api.com/API/${query}/${this.apiKey}`;
  }

  // what is "this" refering to

  // Its the same as Java, this refers to the current class
  // right

  // You can refernece the methods on the class with 'this'
  // So to reference the method below you can call
  async fetchMovies() {
    axios
      .get(this.fetchUrl)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log('ERROR', err);
        return err;
      });
  }
  //
  get movies() {
    return this.fetchMovies();
  }
}
// what is this^^
