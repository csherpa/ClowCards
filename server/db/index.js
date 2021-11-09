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
  spanishName: String,
  kangji: String,
  clowCard: String,
  sakuraCard: String,
});

const Card = mongoose.model('Card', cardSchema);

const addCard = (cards) => {
  
  const newCard = {
    cardNumber: cards.cardNumber,
    englishName: cards.englishName,
    spanishName: cards.spanishName,
    kangji: cards.kangi,
    clowCard: cards.clowCard,
    sakuraCard: cards.sakuraCard
  };
  return Card.find(newCard)
    .then((data) => {
      if (data.length > 0) {
        console.log('exits!!');
      } else {
        const result = new Card(newCard);
        return result.save();
      }
    });
};

module.exports.addCard = addCard;