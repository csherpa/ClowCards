import React from 'react';
import CardListEntry from './CardListEntry.jsx';

const CardList = ({ deckCards }) => {
  // console.log(props);
  return (
    <div>
      <h4>Card List</h4>
      {
        deckCards.map((card, index) => {
          return (
            <CardListEntry
              card={card}
              key={index}
            />
          );
        })
      }
    </div>
  );
};


export default CardList;