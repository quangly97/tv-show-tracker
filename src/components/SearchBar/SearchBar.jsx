import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../../context';

const SearchBar = ({type}) => {
    const [title, setTitle] = useState('');
    const inputRef = useRef('');
    const { getPrograms, getWatchlistPrograms } = useGlobalContext();

    const handleChange = () => {
        setTitle(inputRef.current.value);
    }

    useEffect(() => {
        if(type === 'searching'){
            getPrograms(title);
        }else if(type === 'personal'){
            getWatchlistPrograms(title);
        }
    }, [title]);

    return (
        <article>
            <form className="form">
                <label htmlFor={inputRef}>Show: </label>
                <input 
                    type="text"
                    value={title}
                    ref={inputRef}
                    onChange={handleChange}
                />
            </form>
        </article>
    )
}

export default SearchBar;
