// TODO
const mongoose = require('mongoose');

const DATABASE = 'cards';
const DB_URI = `mongodb://localhost/${DATABASE}`;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Failed to connect to database', err));


const cardSchema = new mongoose.Schema({

});

const Card = mongoose.model('Card', cardSchema);