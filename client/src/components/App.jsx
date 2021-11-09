// TODO
import React from 'react';
import axios from 'axios';

import SearchCard from './SearchCard.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // this will store all card I want to add in my list and database
      cards: [],
    };
  }

  

  render() {
    const { cards } = this.state;

    return (
      <div>
        <h1>MyCards</h1>
        <SearchCard/>
      </div>
    );
  }
}

export default App;