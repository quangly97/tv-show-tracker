import React from 'react'
import { useGlobalContext } from '../../context'

const ProgramCard = ({id, name}) => {
    const { watchlist, setWatchlist } = useGlobalContext();

    const removeProgram = (id) => {
        const updatedWatchlist = watchlist.filter((program) => program.show.id != id);
        setWatchlist(updatedWatchlist);
    };

    return (
        <article>
            <h3>{name}</h3>
            <button className='btn' onClick={() => removeProgram(id)}>Remove</button>
        </article>
    )
}

export default ProgramCard
