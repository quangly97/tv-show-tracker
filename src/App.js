import React from 'react'
import './App.css';
import {SearchBar, NavBar} from './components/'
import {Statistics, ToWatch, Trendings, TVShows} from './pages/'
import {BrowserRouter as Router, Route, Link} from 'react-router'

function App() {

  return (
    <>
      <SearchBar/>

      <Router>
        <NavBar>

        </NavBar>
      </Router>
    </>
  );
}

export default App;
