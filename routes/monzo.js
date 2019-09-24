require('dotenv').config()
require('dotenv/config')

const express = require('express');
const request = require('request');
const cors = require('cors')
const app = express();
const router = express.Router();

router.use(cors())

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
  const { code } = req.query;
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
    // accessToken = JSON.parse(body); // Populate accessToken
    console.log(accessToken + ' access token here');
    res.redirect('/');
  });
  console.log('done');
});


router.get('/accounts', (req, res) => {
  const accountsUrl = 'https://api.monzo.com/accounts';
  const { token_type, access_token } = accessToken;

  request.get(accountsUrl, {
    headers: {
      Authorization: `${token_type} ${access_token}`
    }
  }, (req, response, body) => {
    const { accounts } = JSON.parse(body);
    console.log(accounts + ' accounts here!!!!!');

    res.type('html');
    res.write(`<h1>${accounts}${req}${body}${response}</h1><ul>`);

    for(let account of accounts) {
      const {id, type, description } = account;
      res.write(`
        <li>
          ${description}(<i>${type}</i>) - <a href="/transactions/${id}">View transaction history</a>
        </li>
      `);
    }

    res.end('</ul>');
  });
});


router.get('/transactions/:acc_id', (req, res) => {
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
