import React from 'react';
import ReactDOM from 'react-dom';
// Imports the mail CSS file, is meant to be a container for the basic rouls that you not need touching
import './Components/Style/Body.css';
import MainApp from './MainApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MainApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
