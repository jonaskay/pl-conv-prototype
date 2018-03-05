import React from 'react';
import './ConvertMenu.css';
import ConvertMenuField from './ConvertMenuField';

class ConvertMenu extends React.Component {
  render() {
    return (
      <div className="ConvertMenu">
        <div className="ConvertMenu-header">Settings</div>
        <div className="ConvertMenu-body">
          <div style={{color: 'rgba(255,255,255,.7)'}}>Convert playlist to:</div>
          <ConvertMenuField name="Spotify" />
          <ConvertMenuField name="YouTube" />
        </div>
      </div>
    );
  }
}

export default ConvertMenu;
