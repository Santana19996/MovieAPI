const axios = require('axios');
const dotenv = require('dotenv');

// dotenv.config();
 // let searchMovieUrl = `https://imdb-api.com/API/Search/${process.env.API_KEY}/lost%202004`;

 export default Class MovieService {
    constructor() {
        this.apiKey = process.env.API_KEY;
        this.fetchUrl = `https://imdb-api.com/API/Search/${this.apiKey}/lost%202004`;
    }

    async fetchMovies(){
        
    }

    get movies(){

    }

 }

// axios
//   .get(searchMovieUrl)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// modules.export = router;
