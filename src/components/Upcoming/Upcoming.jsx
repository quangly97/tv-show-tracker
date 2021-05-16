import React from 'react';
import { ProgramCard } from '../';
import { findLatestEpisode, findNextEpisode } from '../../helper';
import { useGlobalContext } from "../../context";

const Upcoming = () => {

    const { state: { runningWatchlist } } = useGlobalContext();

    const upcomingWatchlist = runningWatchlist.filter((program) => (findLatestEpisode(program).id !== program.episodes[program.episodes.length - 1].id && findNextEpisode(program) !== undefined)).map((program) => {
        program.status = 'Upcoming';
        return program;
    });

    return (
        <div>
            {
                upcomingWatchlist.map((program) => {
                    const { id } = program;
                    return (
                        <ProgramCard key={id} {...program} nextEpisode={findNextEpisode(program)}/>
                    )
                })
            }
        </div>
    )
}

export default Upcoming
