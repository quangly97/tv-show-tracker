import React from 'react'
import { useGlobalContext } from '../../context'
import parse from 'html-react-parser'

const SearchResults = () => {

    const {results, watchlist, setWatchlist} = useGlobalContext();

    const addToList = (show) => {
        setWatchlist([...watchlist, show]);
        console.log(watchlist);
    }

    return (
        <>
            {
                results.map((result) => {
                    const {show: {id, name, summary, premiered, image}} = result;
                    return (
                        <section className="product" key={id}>
                            {image && <img alt={name} src={image.original}/>}
                            <h4>{premiered && premiered.substring(0,4)}</h4>
                            <h3>{name}</h3>
                            {summary && parse(summary)}
                            <button onClick={() => addToList(result)}>+</button>
                        </section>
                    )
                })
            }
        </>
    )
}

export default SearchResults
