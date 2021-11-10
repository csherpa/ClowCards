import React from 'react';

const CardListEntry = ({ card, deleteCard, updateCard }) => {
  // console.log(props);
  return (
    <div>
      <img src={card.clowCard}/>
      <p>{card.englishName}</p>
      <p>{card.cardNumber}</p>
      <p>{card.meaning}</p>
      <button onClick={ () => updateCard(card.meaning)}>Update</button>
      <button onClick={ () => deleteCard(card.cardNumber)} >Delete</button>
    </div>
  );
};


export default CardListEntry;