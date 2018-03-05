import React from 'react';

class DraftItemCounter extends React.Component {
  render() {
    const itemCount = this.props.items.length;

    return (
      <span>{itemCount} {itemCount === 1 ? 'track' : 'tracks'}</span>
    );
  }
}

export default DraftItemCounter;
