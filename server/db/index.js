// TODO
const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost/cards';

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Failed to connect to database', err));


const cardSchema = new mongoose.Schema({
  cardId: Number,
  cardNumber: Number,
  englishName: String,
  spanishName: String,
  kangji: String,
  clowCard: String,
  sakuraCard: String,
  meaning: String
});

const Card = mongoose.model('Card', cardSchema);

const addCard = (card) => {
  return new Promise ((resolve, reject) => {
    const newCard = new Card({
      cardId: card.cardId,
      cardNumber: card.cardNumber,
      englishName: card.englishName,
      spanishName: card.spanishName,
      kangji: card.kangi,
      clowCard: card.clowCard,
      sakuraCard: card.sakuraCard,
      meaning: card.meaning
    });

    Card.findOne({cardNumber: card.cardNumber}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        if (data === null) {
          newCard.save((err, data) => {
            if (err) {
              reject(err);
            } else {
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

const getDeckCard = () => {
  return Card.find().exec();
};

module.exports.addCard = addCard;
module.exports.getDeckCard = getDeckCard;
module.exports.Card = Card;