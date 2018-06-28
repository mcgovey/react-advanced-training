import React from 'react';

import { Consumer } from './stateCtx';

import Item from './Item';

class List extends React.Component {
  render() {
    return (
      <Consumer>
        {value => (
          <React.Fragment>
            {value.map(e => <Item key={e} item={e} />)}
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}

export default List;

// renderProp
