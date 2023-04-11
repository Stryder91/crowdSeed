import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import { Provider } from './utils/Context';

ReactDOM.render(
  <BrowserRouter >
    <Provider>
     <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
