const { Router } = require('express');
const Cards = Router();
const { Card, addCard, getDeckCard, deleteCard } = require('../db');
const { getCardData } = require('../helpers/index');


Cards.get('/deck', (req, res) => {
  // console.log(req);
  getDeckCard()
    .then((data) => {
      // console.log('data', data);
      res.set('Content-Type', 'application/json');
      res.status(200);
      res.send(JSON.stringify(data));
    }).catch((error) => {
      console.log('Get Database fail');
      res.status(500).end();
    });
});


/// this get all the card data and render it in my client side
Cards.get('/', (req, res) => {
  console.log('searchbuttonclicked!!!');
  getCardData()
    .then(({ data }) => {
      const result = data['data'];
      // console.log(result.length);
      res.send(result);
    });
});




Cards.post('/', (req, res) => {
  // console.log('addbuttonClicked', req);
  addCard(req.body)
    .then((data) => {
      // console.log('data', data);
      res.status(201).send(data);
    }).catch((err) => {
      console.log('PostError', err);
      res.status(500).end();
    });
});


////Update the card with the id
Cards.put('/deck/:id', (req, res) => {
  const id = req.params.id;
  const data = {
    meaning: req.body.meaning
  };
  const option = { useFindAndModify: false };
  Card.updateOne({_id: id}, data)
    .then(() => {
      res.send('success');
    });
});

///delete the card using card id in the request
Cards.delete('/deck/:id', (req, res) => {
  const id = req.params.id;
  Card.deleteOne({_id: id}, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Successfully! Deleted.');
    }
  });
});


module.exports = {
  Cards,
};