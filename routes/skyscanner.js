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

  const flights = []

  const paris = {
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/gbp/en-EN/LOND-sky/PARI-sky/2019-11-28/',
    headers: apiHeaders
  }

  const reykjavik = {
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/gbp/en-EN/LOND-sky/REYK-sky/2019-11-28/',
    headers: apiHeaders
  }

  request.get(paris, (req, response, body) => {
    flights.push(JSON.parse(body))
    setTimeout(function(){
        console.log(flights);
      }, 3000);
    }
  )

  request.get(reykjavik, (req, response, body) => {
    flights.push(JSON.parse(body))
    setTimeout(function(){
        console.log(flights);
      }, 3000);
    }
  )

  setTimeout(function(){
      res.json(flights);
    }, 3000);

})

module.exports = router;
