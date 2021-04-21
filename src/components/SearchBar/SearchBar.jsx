import React, {useState, useRef} from 'react'
import { useGlobalContext } from '../../context';

const SearchBar = () => {
    const [title, setTitle] = useState('');
    const inputRef = useRef(null);
    const {getTVShows} = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        getTVShows(title);
    }

    return (
        <article>
            <form onSubmit={handleSubmit}>
                <label htmlFor={inputRef}>Show:</label>
                <input 
                    type="text"
                    value={title}
                    ref={inputRef}
                    onChange={(e) => {setTitle(e.target.value)}}
                />
                <button type="submit" id='btn'>Submit</button>
            </form>
        </article>
    )
}

export default SearchBar