import React from 'react'
import { useGlobalContext } from '../../context'
import parse from 'html-react-parser'

const SearchResults = () => {

    const {results} = useGlobalContext();

    return (
        <>
            {
                results.map((result) => {
                    const {show: {id, name, summary}} = result;
                    return (
                        <section className="product" key={id}>
                            <h3>{name}</h3>
                            {summary && parse(summary)}
                            <button>+</button>
                        </section>
                    )
                })
            }
        </>
    )
}

export default SearchResults
