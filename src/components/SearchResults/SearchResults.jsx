import React from 'react'
import { useGlobalContext } from '../../context'
import parse from 'html-react-parser'

const SearchResults = () => {

    const {programs, watchlist, setWatchlist} = useGlobalContext();

    const addToList = (program) => {
        console.log(watchlist);
        if(!showInList(program.show.id)){
            setWatchlist([...watchlist, program]);
        }
        
    }

    const showInList = (id) => {
        if(watchlist.filter((program) => id === program.show.id).length > 0){
            return true;
        }
        return false;
    }

    return (
        <>
            {
                programs.map((program) => {
                    const {show: {id, name, summary, premiered, image}} = program;
                    return (
                        <section className="product" key={id}>
                            {image && <img alt={name} src={image.original}/>}
                            <h4>{premiered && premiered.substring(0,4)}</h4>
                            <h3>{name}</h3>
                            {summary && parse(summary)}
                            <button onClick={() => addToList(program)}>+</button>
                        </section>
                    )
                })
            }
        </>
    )
}

export default SearchResults
