import React from 'react';

class SearchCard extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      cardNumber: ''
    };
  }



  render() {
    const { cardNumber } = this.state;

    return (
      <div>
        <h4>Add a number between 1 - 60!</h4>
        Enter a number: <input value={cardNumber}/>
        <button type="button">Search Card</button>
      </div>
    );
  }
}

export default SearchCard;

