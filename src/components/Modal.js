import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  render() {
    return (
      <div className="Modal">
        <div className="Modal-dialog">{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
