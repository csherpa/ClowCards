const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { Cards } = require('./api/index');


/// this connected to the client side; uncomment this when working in the client side
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const app = express();

app.use(bodyParser.json());
app.use(express.static(CLIENT_PATH));

app.use('/api/card', Cards);

module.exports = {
  app,
};