import React from 'react';
import ReactDOM from 'react-dom';
//import $ from 'jquery';
//import Popper from 'popper.js';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootswatch/dist/darkly/bootstrap.min.css";  //Tema oscuro
//import 'bootstrap/dist/css/bootstrap.min.css'; //Original tema claro

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
   

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
