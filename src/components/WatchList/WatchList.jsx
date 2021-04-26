import React from 'react'
import { useGlobalContext } from "../../context";
import { ProgramCard } from '../'
import { Link } from 'react-router-dom'

const WatchList = () => {

    const { state } = useGlobalContext();

    return (
        <div>
            {
                state.watchlist.map((program) => {
                    const { name, id } = program
                    return (
                      <Link to={`/programinformation/${id}`} key={id}>
                        <ProgramCard name={name} id={id} />
                      </Link>
                    );
                })
            }
        </div>
    )
}

export default WatchList
