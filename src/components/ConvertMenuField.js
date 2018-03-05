import React from 'react';
import './ConvertMenuField.css';

class ConvertMenuField extends React.Component {
  render() {
    const name = this.props.name;

    return (
      <div className="ConvertMenuField">
        <div>
          <input type="checkbox" disabled />
          <label style={{color: 'rgba(255,255,255,.5)', marginLeft: '.5rem'}}>{name}</label>
        </div>
        <div>
          <button className="ConvertMenuField-button">
            Connect with {name}
          </button>
        </div>
      </div>
    );
  }
}

export default ConvertMenuField;
