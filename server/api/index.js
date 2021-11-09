const { Router } = require('express');
const Cards = Router();
const { addCard, getCardById } = require('../db');
const { getCardData } = require('../helpers/index');


Cards.get('/', (req, res) => {
  getCardById()
    .then((data) => {
      console.log(data, 'emptydatabase');///this is empty because my database is currently empty
      res.set('Content-Type', 'application/json');
      res.status(200);
      res.send(JSON.stringify(data));
    }).catch((error) => {
      console.log('Get Database fail');
      res.status(500).end();
    });
});


Cards.post('/', (req, res) => {
  // console.log(req.body);
  getCardData()
    .then(({ data }) => {
      const result = data['data'];
      console.log(result.length);//able to
      // console.log(Array.isArray(result));
      ///save only one card in the database;
      addCard(result)
        .then(() => {
          res.status(201).end();
        }).catch((error) => {
          // console.log('Get error');
          res.status(500).end();
        });
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