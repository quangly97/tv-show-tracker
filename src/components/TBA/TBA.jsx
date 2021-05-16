import React from 'react';
import { ProgramCard } from "../";
import { useGlobalContext } from "../../context";
import { findLatestEpisode, findNextEpisode } from "../../helper";

const TBA = () => {

    const { state: { runningWatchlist } } = useGlobalContext();

    const tbaWatchlist = runningWatchlist.filter((program) => (findLatestEpisode(program).id === program.episodes[program.episodes.length - 1].id || findNextEpisode(program) === undefined)).map((program) => {
        program.status = 'To Be Announced';
        return program;
    });

    return (
        <div>
            {
                tbaWatchlist.map((program) => {
                    const { id } = program
                    return (
                        <ProgramCard key={id} {...program}/>
                    )
                })
            }
        </div>
    )
}

export default TBA
