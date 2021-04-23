import React from 'react'
import { useGlobalContext } from "../../context";
import { ProgramCard } from '../'

const WatchList = () => {

    const { watchlist } = useGlobalContext();

    return (
        <div>
            {
                watchlist.map((program) => {
                    const {show: {name, id}} = program
                    return (
                        <ProgramCard key={id} name={name} />
                    )
                })
            }
        </div>
    )
}

export default WatchList
