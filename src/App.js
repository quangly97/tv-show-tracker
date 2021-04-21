import React from 'react'
import './App.css';
import {SearchBar, NavBar, SearchResults} from './components/'
//import {Statistics, ToWatch, Trendings, TVShows} from './pages/'
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {

  return (
    <>
      <SearchBar/>
      <SearchResults/>
    </>
  );
}

export default App;
