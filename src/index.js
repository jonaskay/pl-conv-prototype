import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import trackData from './tracks.json';

ReactDOM.render(
  <App fileName="2017-pitchfork-top-20.m3u" fileData={trackData} />, document.getElementById('root')
);
registerServiceWorker();
