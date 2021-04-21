import React from 'react'
import { useGlobalContext } from '../../context'

const SearchResults = () => {

    const {results} = useGlobalContext();

    return (
        <>
            {
                results.map((result, index) => {
                    const {show} = result;
                    return (
                        <h1 key={index}>{show.name}</h1>
                    )
                })
            }
        </>
    )
}

export default SearchResults
