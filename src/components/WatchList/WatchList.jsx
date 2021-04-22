import React from 'react'
import { useGlobalContext } from "../../context";

const WatchList = () => {

    const { watchlist } = useGlobalContext();

    return (
        <div>
            {
                watchlist.map((program) => {
                    const {show: {name, id}} = program
                    return (
                        <h3 key={id}>{name}</h3>
                    )
                })
            }
        </div>
    )
}

export default WatchList
