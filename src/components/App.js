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

    this.state = {fileData: null, playlistName: ''};
  }

  handleFileSubmit = (e) => {
    e.preventDefault();
    this.setState({fileData: this.props.demoData, playlistName: this.props.demoName});
  }
  
  handleNameChange = (e) => {
    this.setState({playlistName: e.target.value});
  }

  render() {
    return (
      <div className="App">
        {!this.state.fileData && 
          <Modal>
            <FileForm fileName={this.props.demoName} onSubmit={this.handleFileSubmit} />
          </Modal>
        }
        <div className="App-col1">
          <Draft 
            items={this.state.fileData} 
            name={this.state.playlistName} 
            onNameChange={this.handleNameChange} />
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
