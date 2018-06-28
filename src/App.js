import React, { Component } from 'react';
import './App.css';

import List from './List';

import { Provider } from './stateCtx';

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
      <Provider value={this.state.items}>
        <div className="App">
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
