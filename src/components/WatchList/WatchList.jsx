import React from 'react'
import { useGlobalContext } from "../../context";
import { ProgramCard } from '../'

const WatchList = () => {

    const { state } = useGlobalContext();

    return (
        <div>
            {
                state.watchlist.map((program) => {
                    const { name, id } = program
                    return (
                        <ProgramCard key={id} name={name} id={id} />
                    )
                })
            }
        </div>
    )
}

export default WatchList
