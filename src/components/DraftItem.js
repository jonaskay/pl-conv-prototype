import React from 'react';
import './DraftItem.css';

class DraftItem extends React.Component {
  render() {
    const item = this.props.item;
    
    return (
      <div className={'DraftItem' + (this.props.selected ? ' DraftItem-selected' : '')}>
        <div style={{flex: 'none', width: '13.5rem'}}>{item.name}</div>
        <div>{item.artist}</div>
      </div>
    );
  }
}

export default DraftItem;
