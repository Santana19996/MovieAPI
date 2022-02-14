const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
// You can use this as a starter for your service

 export default Class MovieService {
    constructor() {
        this.apiKey = process.env.API_KEY;
        this.fetchUrl = `https://imdb-api.com/API/Search/${this.apiKey};
    }

    async fetchMovies(){
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

    get movies(){
        return this.fetchMovies();
    }

}


