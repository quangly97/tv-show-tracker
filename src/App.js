import React from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const title = 'game';
const URL = `http://api.tvmaze.com/search/shows?q=${title}`;

const fetchShow = () => {
  axios.get(URL)
  .then(res => {
    console.log(res.data);
  })
}

function App() {

  fetchShow();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
