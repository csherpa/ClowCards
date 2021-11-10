const { Router } = require('express');
const Cards = Router();
const { addCard, getDeckCard } = require('../db');
const { getCardData } = require('../helpers/index');


Cards.get('/deck', (req, res) => {
  console.log(req);
  getDeckCard()
    .then((data) => {
      console.log('data', data);
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
  // .then((data) => {
  //   getAllCard()
  //     .then((data) => {
  //       console.log(data);
  //     });
  // });
});




Cards.post('/', (req, res) => {

  // getCardData()
  //   .then(({ data }) => {
  //     const result = data['data'];
  //     console.log(result.length, 'data');
  //     addCard(result)
  //       .then((data) => {
  //         res.setStatus(201).send(data);
  //       }).catch((err) => {
  //         res.sendStatus(500).end();
  //       });
  //   });
  console.log('addbuttonClicked', req);
  addCard(req.body)
    .then((data) => {
      console.log('data', data);
      res.status(201).send(data);
    }).catch((err) => {
      console.log('PostError', err);
      res.status(500).end();
    });
});


////Update the card with the id
Cards.put('/:id', (req, res) => {

});

///delete the card using card id in the request
Cards.delete('/:id', (req, res) => {

});


module.exports = {
  Cards,
};