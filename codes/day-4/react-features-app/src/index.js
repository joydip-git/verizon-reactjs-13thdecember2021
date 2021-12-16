import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';

const app = App()
ReactDOM.render(
  app,
  document.getElementById('root')
);

