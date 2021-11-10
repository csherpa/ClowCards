import React from 'react';

const Card = ({currentCard}) => {
  // console.log(props);
  return (
    <div>
      <span>{currentCard.englishName}</span>
      <p>{currentCard.cardNumber}</p>
    </div>
  );
};


export default Card;