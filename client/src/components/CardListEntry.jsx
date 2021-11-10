import React from 'react';

const CardListEntry = ({ card }) => {
  // console.log(props);
  return (
    <div>
      <span>{card.englishName}</span>
      <span>: </span>
      <span>{card.cardNumber}</span>
    </div>
  );
};


export default CardListEntry;