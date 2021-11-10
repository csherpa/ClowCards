import React from 'react';

const Card = ( props) => {
  // console.log(props);
  return (
    <div>
      <span>{props.currentCard.englishName}</span>
      <p>{props.currentCard.cardNumber}</p>
    </div>
  );
};


export default Card;