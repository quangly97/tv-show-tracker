import React, {useState} from 'react'
import {useFetch} from '../../useFetch'

const SearchBar = () => {

    const [title, setTitle] = useState('');
    const url = `http://api.tvmaze.com/search/shows?q=${title}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        useFetch(url);
    }

    return (
        <article>
            <form onSubmit={handleSubmit}>
                <label htmlFor="searchBar">Show:</label>
                <input 
                    type="text" 
                    id="searchBar" 
                    name="searchBar"
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                />
                <button type="button" id='btn'>Submit</button>
            </form>
        </article>
    )
}

export default SearchBar
