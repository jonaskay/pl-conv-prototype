import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './components/App';
import jsonData from './tracks.json';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App demoName="2017-pitchfork.m3u" demoData={jsonData} />, document.getElementById('root')
);
registerServiceWorker();
