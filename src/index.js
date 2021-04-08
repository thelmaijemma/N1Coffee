require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App/App';
import './App/App.css';

const appElement = document.getElementById('app');


ReactDOM.render(<App />, appElement);