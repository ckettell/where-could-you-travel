require('dotenv').config()
require('dotenv/config')

const express = require('express');
const request = require('request');
const app = express();
var router = express.Router();

const apiHeaders = {
  "x-rapidapi-host": process.env.RAPID_HOST,
  "x-rapidapi-key": process.env.RAPID_KEY,
  "content-type": "application/json"
}

router.get('/', (req, res) => {

})
