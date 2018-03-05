import React, { Component } from 'react';
import './App.css';
import Draft from './Draft';
import ConvertMenu from './ConvertMenu';
import ConvertButton from './ConvertButton';
import Modal from './Modal';
import FileForm from './FileForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {fileData: null};
  }

  render() {
    return (
      <div className="App">
        {!this.state.fileData && 
          <Modal><FileForm fileName={this.props.fileName} /></Modal>
        }
        <div className="App-col1">
          <Draft items={this.props.fileData} />
        </div>
        <div className="App-col2">
          <ConvertMenu />
          <ConvertButton />
        </div>
      </div>
    );
  }
}

export default App;
