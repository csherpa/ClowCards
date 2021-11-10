import React from 'react';

const CardListEntry = ({ card, deleteCard, updateCard }) => {
  // console.log(props);
  return (
    <div>
      <span>{card.englishName}</span>
      <span>: </span>
      <span>{card.cardNumber}</span>
      <button onClick={updateCard}>Update</button>
      <button onClick={deleteCard} >Delete</button>
    </div>
  );
};


export default CardListEntry;