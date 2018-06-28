import React from 'react';

import Item from './Item';

class List extends React.Component {
  render() {
    return this.props.items.map(e => <Item key={e} item={e} />);
  }
}

export default List;
