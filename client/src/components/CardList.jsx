import React from 'react';
import CardListEntry from './CardListEntry.jsx';

const CardList = ({ deckCards, deleteCard , updateCard}) => {
  // console.log(props);
  return (
    <div>
      <h4>Card List</h4>
      Current Card Count: {deckCards.length}.
      {
        deckCards.map((card, index) => {
          return (
            <CardListEntry
              card={card}
              key={index}
              deleteCard={deleteCard}
              updateCard={updateCard}
            />
          );
        })
      }
    </div>
  );
};


export default CardList;