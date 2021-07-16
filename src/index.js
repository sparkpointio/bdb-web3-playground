import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Web3Connection} from "./blockchain/Web3Connection";
import App from './App';
import reportWebVitals from './reportWebVitals';

let web3Connection;
try {
    web3Connection = new Web3Connection()

    window.web3Connection = web3Connection
} catch (e) {
    console.error('No web3 provider detected, please install metamask')
}

ReactDOM.render(
  <React.StrictMode>
    <App web3Connection={web3Connection}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
