import React, { Component } from 'react';
import './App.css';

import List from './List';

class App extends Component {
  state = {
    items: [7, 9, 10],
  };
  addItem = newItem => {
    this.setState(state => ({
      items: [...state.items, newItem],
    }));
  };
  render() {
    return (
      <div className="App">
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
