import React from 'react';

class SearchCard extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      cardNumber: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const cardNumber = event.target.value;
    this.setState({
      cardNumber
    });
  }

  handleClick() {
    this.props.handleSearch(this.state.cardNumber);
  }

  render() {
    const { cardNumber } = this.state;

    return (
      <div>
        <h4>Add a number between 1 - 55!</h4>
        Enter a number: <input value={cardNumber} onChange={this.handleChange}/>
        <button onClick={this.handleClick} type="button">Search Card</button>
  
      </div>
    );
  }
}

export default SearchCard;
