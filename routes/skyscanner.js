require('dotenv').config()
require('dotenv/config')
const unirest = require('unirest');
const moment = require('moment')
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

function oneWeekFromNow() {
  const result = new Date()
  result.setDate(result.getDate() + 7)
  return moment(result).format('YYYY-MM-DD')
}

unirest.get

router.get('/', (req, res) => {

  const flights = []

  const france = {
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/gbp/en-EN/LOND-sky/FR-sky/${oneWeekFromNow()}/`,
    headers: apiHeaders
  }

  const ireland = {
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/gbp/en-EN/LOND-sky/IE-sky/${oneWeekFromNow()}/`,
    headers: apiHeaders
  }

  const iceland = {
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/gbp/en-EN/LOND-sky/IS-sky/${oneWeekFromNow()}/`,
    headers: apiHeaders
  }

  const spain = {
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/gbp/en-EN/LOND-sky/ES-sky/${oneWeekFromNow()}/`,
    headers: apiHeaders
  }

  request.get(france, (req, response, body) => {
    flights.push(JSON.parse(body))
    }
  )

  request.get(iceland, (req, response, body) => {
    flights.push(JSON.parse(body))
    }
  )

  request.get(ireland, (req, response, body) => {
    flights.push(JSON.parse(body))
    }
  )

  request.get(spain, (req, response, body) => {
    flights.push(JSON.parse(body))
    }
  )

  setTimeout(function(){
      res.json(flights);
    }, 1500);

})

module.exports = router;
