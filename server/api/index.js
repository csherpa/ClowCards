const { Router } = require('express');
const Cards = Router();
const { addCard } = require('../db');
const { getCardData } = require('../helpers/index');

Cards.get('/', (req, res) => {
  getCardData()
    .then(({ data }) => {
      const result = data['data'];
      // console.log(Array.isArray(result));
      return Promise.all(
        result.map((val) => {
          return addCard(val);
        })
      ).then(() => {
        res.status(201).send();
      });
    }).catch((error) => {
      console.log('Get error');
      res.status(500).end();
    });
});

module.exports = {
  Cards,
};