// TODO
import React from 'react';
import axios from 'axios';

import SearchCard from './SearchCard.jsx';
import Card from './Card.jsx';
import CardList from './CardList.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      currentCard: {},
      deckCards: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  componentDidMount() {
    //call my server
    axios.get('/api/card')
      .then(({data}) => {
        console.log('ApiJsonData', data);
        this.setState({
          cards: data
        });
      });
    this.getDeckCard();
  }

  handleSearch(event) {
    console.log(`${event} was searched`);
    const eventNum = Number(event);
    const { cards, currentCard } = this.state;
    cards.filter((card) => {
      if (card.cardNumber === eventNum) {
        this.setState({
          currentCard: card
        });
      }
    });
  }

  addCard() {
    console.log('click,click');
    axios({
      method: 'POST',
      url: '/api/card',
      data: this.state.currentCard
    }).then((res) => {
      console.log('click');
      console.log(res, 'res');
    }).catch(err => {
      console.log('error', err);
    });
  }

  getDeckCard() {
    axios.get('/api/card/deck')
      .then((res) => {
        console.log('deckCard', res.data);
        const deckCard = res.data;
        this.setState({
          deckCards: deckCard
        });
      }).catch((err) => {
        console.log('err');
      });
  }

  updateCard(id) {
    const { deckCards } = this.state;
    const change = deckCards.find((elem) => {
      return elem.meaning === id;
    });
    axios.put(`/api/card/deck/${change._id}`)
      .then((res) => {
        console.log('update', res);
      }).catch((err) => {
        console.log('update error');
      });
  }

  deleteCard(cardNumber) {
    const { deckCards } = this.state;
    const deleteResult = deckCards.find((elem) => {
      console.log('elm', elem);
      return elem.cardNumber === cardNumber;
    });
    axios.delete(`/api/card/deck/${deleteResult._id}`)
      .then((res) => {
        console.log(res, 'delete');
      }).catch((err) => {
        console.log('deletion error');
      });
  }

  render() {
    const { cards, currentCard, deckCards} = this.state;
    // console.log('current', deckCards);
    return (
      <div>
        <h1>Clow Collection</h1>
        <button onClick={this.addCard} >Add to my list</button>
        <SearchCard handleSearch={this.handleSearch} />
        <div>
          <Card currentCard={ currentCard }/>
        </div>
        <div>
          <CardList
            deckCards={deckCards}
            deleteCard={this.deleteCard.bind(this)}
            updateCard={this.updateCard.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;