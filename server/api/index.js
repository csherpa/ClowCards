const { Router } = require('express');
const Cards = Router();
const { Card, addCard, getDeckCard, deleteCard } = require('../db');
const { getCardData } = require('../helpers/index');


/// this get all the card data and render it in my client side
Cards.get('/', (req, res) => {
  getCardData()
    .then(({ data }) => {
      const result = data['data'];
      res.send(result);
    });
});


Cards.get('/deck', (req, res) => {
  getDeckCard()
    .then((data) => {
      res.set('Content-Type', 'application/json');
      res.status(200);
      res.send(JSON.stringify(data));
    }).catch((error) => {
      console.log('Get Database fail');
      res.status(500).end();
    });
});


Cards.post('/', (req, res) => {
  addCard(req.body)
    .then((data) => {
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

  Card.updateOne({_id: id}, data)
    .then(() => {
      res.send('success');
    });
});

///delete the card using card id
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