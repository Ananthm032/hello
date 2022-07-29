import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import Router from './Context/Routing'
import {BrowserRouter} from "react-router-dom"
ReactDOM.render(
  <React.StrictMode> 
    <BrowserRouter>
    <Router>
      <App />
    </Router>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();