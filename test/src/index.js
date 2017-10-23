import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var element = React.createElement('h1', { classname: 'greeting' }, 'Hello, World!');
ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
