import React from 'react';
import './FileForm.css';

class FileForm extends React.Component {
  render() {
    return (
      <div className="FileForm">
        <div style={{fontSize: '1.25rem', marginBottom: '1rem'}}>New Playlist</div>
        <div style={{marginBottom: '1rem'}}>Choose a playlist file to start</div>
        <form className="FileForm-form" onSubmit={this.props.onSubmit}>
          <input
            type="text"
            value={this.props.fileName}
            className="FileForm-input"
            disabled />
          <input type="submit" value=">" className="FileForm-button" />
        </form>
      </div>
    );
  }
}

export default FileForm;
