import React, {useState, useEffect} from 'react'

const SearchBar = () => {

    const [title, setTitle] = useState('');
    const url = `http://api.tvmaze.com/search/shows?q=${title}`;
    const [result, setResult] = useState([]);

    const handleTitle = (e) => {
        var temp = e.target.value;
        temp.replace(/\s/g, '-');
        setTitle(temp);
        console.log(title);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(url);
        getTVShows(url);
    }

    const getTVShows = async (url) => {
        const response = await fetch(url);
        const result = await response.json();
        setResult(result);
        setTitle('');
        console.log(result);
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
                    onChange={handleTitle}
                />
                <button type="submit" id='btn'>Submit</button>
            </form>
        </article>
    )
}

export default SearchBar
