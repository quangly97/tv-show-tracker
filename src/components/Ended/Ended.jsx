import React from 'react';
import { ProgramCard } from "../";
import { useGlobalContext } from "../../context";

const Ended = () => {

    const { state: { endedWatchlist } } = useGlobalContext();

    return (
        <div>
            {
                endedWatchlist.map((program) => {
                    const { id } = program
                    return (
                        <ProgramCard key={id} {...program}/>
                    )
                })
            }
        </div>
    )
}

export default Ended
