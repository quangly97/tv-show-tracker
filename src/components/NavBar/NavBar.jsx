import React from 'react'
import { Link } from 'react-router-dom'
import { SearchBar } from '../'

const NavBar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">TV Shows</Link>
          </li>
          <li>
            <Link to="/towatch">To Watch</Link>
          </li>
          <li>
            <Link to="/trendings">Trendings</Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          <SearchBar/>
        </ul>

      </nav>
    );
}

export default NavBar
