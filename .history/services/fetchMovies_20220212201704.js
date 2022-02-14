const axios = require('axios');
const dotenv = require('dotenv');
const { builtinModules } = require('module');

dotenv.config();
let searchMovieUrl = `https://imdb-api.com/API/Search/${process.env.API_KEY}/lost%202004`;

axios
  .get(searchMovieUrl)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

modules.export = router;
