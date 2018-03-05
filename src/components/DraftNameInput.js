import React from 'react';
import './DraftNameInput.css';

class DraftNameInput extends React.Component {
  render() {
    return (
      <input
        type="text" 
        value={this.props.name} 
        className="DraftNameInput"
        onChange={this.props.onChange} />
    );
  }
}

export default DraftNameInput;
