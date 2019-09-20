require('dotenv').config()
require('dotenv/config')
const unirest = require('unirest');

const express = require('express');
const request = require('request');
const app = express();
const router = express.Router();

const skyScannerBrowseQuotes = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/"

const apiHeaders = {
  "x-rapidapi-host": process.env.RAPID_HOST,
  "x-rapidapi-key": process.env.RAPID_KEY,
  "content-type": "application/json"
}

unirest.get

router.get('/', (req, res) => {

  const options = {
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/gbp/en-EN/LOND-sky/PARI-sky/2019-11-28/',
    headers: apiHeaders
  }

  request.get(options, (req, response, body) => {

    console.log(body);

    // console.log(body);
    // console.log(body["MinPrice"]);
    // console.log(body[3]);




      res.write(`

          ${body}
      `)
    }
  )

})

module.exports = router;
