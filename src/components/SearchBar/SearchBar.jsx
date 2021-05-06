import React, { useState, useEffect, useRef } from 'react'
import { useGlobalContext } from '../../context';

const SearchBar = () => {
    const [title, setTitle] = useState('');
    const inputRef = useRef('');
    const { getPrograms } = useGlobalContext();

    const handleChange = () => {
        setTitle(inputRef.current.value);
    }

    useEffect(() => {
        getPrograms(title);
    }, [title])

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

export default SearchBar
