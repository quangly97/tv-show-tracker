import React, {useState} from 'react'
import './App.css';
import axios from 'axios'

function App() {

  const [title, setTitle] = useState('');
  const URL = `http://api.tvmaze.com/search/shows?q=${title}`;

  const fetchShow = (e) => {
    e.preventDefault();

    console.log(title);

    axios.get(URL)
    .then(res => {
      console.log(res.data);
    })
  }

  const changeTitle = (e) => {
    setTitle(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={fetchShow}>
          <label htmlFor="search">Show:</label>
          <input 
            type="text" 
            id="search" 
            name="search"
            onChange={changeTitle}
          />
          <button id='btn'>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
