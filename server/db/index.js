// TODO
const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost/cards';

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Failed to connect to database', err));


const cardSchema = new mongoose.Schema({
  _id: Number,
  cardNumber: Number,
  englishName: String,
  // spanishName: String,
  // kangji: String,
  // clowCard: String,
  // sakuraCard: String,
});

const Card = mongoose.model('Card', cardSchema);

const addCard = (cards) => {
  return new Promise ((resolve, reject) => {
    const newCard = new Card({
      cardNumber: cards.cardNumber,
      englishName: cards.englishName,
      // spanishName: cards.spanishName,
      // kangji: cards.kangi,
      // clowCard: cards.clowCard,
      // sakuraCard: cards.sakuraCard
    });

    Card.findOne({cardNumber: cards.cardNumber}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        if (data === null) {
          newCard.save((err, data) => {
            // console.log('data', data);
            if (err) {
              reject(err);
            } else {
              // console.log('?????????', data);
              return resolve(data);
            }
          });
        } else {
          return resolve();
        }
      }
    });
  });
};

const getCardById = () => {
  //finds all the documents, need to change it to find only by cardNumber when my database contains some data
  return Card.find({}).exec();
};

const updateCard = () => {
  return Card.findByIdAndUpdate();
};

const deleteCard = () => {

};

module.exports.addCard = addCard;
module.exports.getCardById = getCardById;