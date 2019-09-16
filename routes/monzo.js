const express = require('express');
const request = require('request');
const app = express();
var router = express.Router();

const oauthDetails = {
  client_id: '[your client id]',
  client_secret: '[your client secret]',
  redirect_uri: 'http://localhost:9000/oauth/callback'
};

// Will be populated once received
let accessToken = null;

app.get('/', (req, res) => {
  const { client_id, redirect_uri } = oauthDetails;
  const monzoAuthUrl = 'https://auth.monzo.com';
  res.type('html');
  res.send(`
    <h1>Hello</h1>
    <form action="${monzoAuthUrl}">
      <input type="hidden" name="client_id" value="${client_id}" />
      <input type="hidden" name="redirect_uri" value="${redirect_uri}" />
      <input type="hidden" name="response_type" value="code" />
      <button>Sign in</button>
    </form>
  `);
});

module.exports = router;

app.listen(9001);
