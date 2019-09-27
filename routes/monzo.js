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
      accounts = JSON.parse(body);
      console.log(accounts + ' accounts here!!!!!');
      res.redirect(`/transactions`);

    });
  }, 10000)


});


router.get('/transactions', (req, res) => {
  console.log(JSON.stringify(accounts));

  console.log(accounts + ' accounts are here too');

  for (let account of accounts) {
    const { id, type, description } = account
    console.log(id);
    console.log(type);
    console.log(account);
  }
  console.log(id + ' id here');


  const { acc_id } = req.params;
  const { token_type, access_token } = accessToken;
  const transactionsUrl = `https://api.monzo.com/transactions?expand[]=merchant&account_id=${acc_id}`;

  request.get(transactionsUrl, {
    headers: {
      Authorization: `${token_type} ${access_token}`
    }
  }, (req, response, body) => {
    const { transactions } = JSON.parse(body);

    res.type('html');
    res.write(`
      <h1>Transactions</h1>
      <table>
        <thead>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </thead>
        <tbody>
    `);

    for(let transaction of transactions) {
      const {
        description,
        amount,
        category
      } = transaction;

      res.write(`
        <tr>
          <td>${description}</td>
          <td>&pound;${(amount/100).toFixed(2)}</td>
          <td>${category}</td>
        </tr>
      `);
    }

    res.write('</tbody></table>');
    res.end('<br /><a href="/accounts">&lt; Back to accounts</a>');
  });
});

module.exports = router;
