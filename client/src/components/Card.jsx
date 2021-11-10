import React from 'react';

const Card = ({currentCard}) => {
  // console.log(props);
  return (
    <div>
      <img src={currentCard.clowCard}/>
      <div>
        <p>{currentCard.englishName}</p>
        <p>{currentCard.cardNumber}</p>
        <p>{currentCard.meaning}</p>
      </div>
    </div>
  );
};


export default Card;