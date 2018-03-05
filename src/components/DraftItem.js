import React from 'react';
import './DraftItem.css';

class DraftItem extends React.Component {
  handleClick = (e) => {
    this.props.onClick(this.props.item);
  }

  render() {
    const item = this.props.item;
    
    return (
      <div 
        className={'DraftItem' + (this.props.selected ? ' DraftItem-selected' : '')}
        onClick={this.handleClick}>
        <div style={{flex: 'none', width: '13.5rem'}}>{item.name}</div>
        <div>{item.artist}</div>
      </div>
    );
  }
}

export default DraftItem;
