require('dotenv').config()
require('dotenv/config')

const express = require('express');
const request = require('request');
const cors = require('cors')
const bodyParser = require('body-parser');
const url = require('url');

const app = express();
const router = express.Router();


router.use(cors())
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

const oauthDetails = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  redirect_uri: 'http://localhost:3000/oauth/callback'
};

// Will be populated once received
let accessToken = null;

router.get('/', (req, res) => {
  const { client_id, redirect_uri, client_secret } = oauthDetails;
  const monzoAuthUrl = 'https://auth.monzo.com';

  res.send({client_id, client_secret, redirect_uri})
});

router.post('/oauth/callback', (req, res) => {

  const { client_id, client_secret, redirect_uri } = oauthDetails;
  console.log(req.body.token);
  const code = req.body.token;
  const monzoAuthUrl = `https://api.monzo.com/oauth2/token`;
  console.log(code + ' code here');
  request.post({
    url: monzoAuthUrl,
    form: {
      grant_type: 'authorization_code',
      client_id,
      client_secret,
      redirect_uri,
      code
    }
  }, (err, response, body) => {
    const accessTokenVar = JSON.stringify(body); // Populate accessToken
    const parseAccessTokenVar = JSON.parse(body)
    accessToken = JSON.stringify(body)
    parseAccessToken = JSON.parse(body)

    res.redirect(url.format({
      pathname:"/accounts",
      query: {
        token: accessTokenVar
      }
    }))

  });
  console.log('done');
});


router.get('/accounts', (req, res) => {
  const accountsUrl = 'https://api.monzo.com/accounts';
  const { token_type, access_token } = parseAccessToken;

  setTimeout(function(){
    request.get(accountsUrl, {
      headers: {
        Authorization: `${token_type} ${access_token}`
      }
    }, (req, response, body) => {
      const { accounts } = JSON.parse(body);
      console.log(accounts + ' accounts here!!!!!');


      for(let account of accounts) {
        const {id, type, description } = account;
        accountId = id
        res.redirect(`/transactions`);
      }

    });
  }, 10000)


});


router.get('/transactions', (req, res) => {
  console.log(accountId + ' account id printed in transactions');
  console.log(parseAccessToken);
  const { token_type, access_token } = parseAccessToken;

  console.log(token_type);


  const { acc_id } = req.params;
  const transactionsUrl = `https://api.monzo.com/transactions?expand[]=merchant&account_id=${accountId}`;

  request.get(transactionsUrl, {
    headers: {
      Authorization: `${token_type} ${access_token}`
    }
  }, (req, response, body) => {
     const { transactions } = JSON.parse(body);

     setTimeout(function(){
         res.json(transactions);
       }, 15000);

  });
});


module.exports = router;
