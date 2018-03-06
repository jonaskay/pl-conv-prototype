import React from 'react';
import './ConvertMenuField.css';

class ConvertMenuField extends React.Component {  
  render() {
    const name = this.props.name;

    return (
      <div className="ConvertMenuField">
        <div>
          <input 
            type="checkbox" 
            className="ConvertMenuField-input"
            checked={this.props.checked} 
            disabled={!this.props.authenticated}
            onClick={this.props.onInputClick} />
          <label style={{color: 'rgba(255,255,255,.5)', marginLeft: '.5rem'}}>{name}</label>
        </div>
        <div>
          {!this.props.authenticated &&
            <button 
              className="ConvertMenuField-button" 
              onClick={this.props.onButtonClick} 
              disabled={this.props.authDisabled}>
              Connect with {name}
            </button>
          }
        </div>
      </div>
    );
  }
}

export default ConvertMenuField;
