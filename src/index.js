import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App fileName="2017-pitchfork.m3u" />, document.getElementById('root'));
registerServiceWorker();
