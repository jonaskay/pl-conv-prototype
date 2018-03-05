import React, { Component } from 'react';
import './App.css';
import Draft from './Draft';
import ConvertMenu from './ConvertMenu';
import ConvertButton from './ConvertButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-col1">
          <Draft name={this.props.fileName} items={this.props.fileData} />
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
