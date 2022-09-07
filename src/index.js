import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ape from './Ape';

import Router from './Context/Routing'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode> 
    <BrowserRouter>
  <Router>
      <Ape />
    </Router>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);
