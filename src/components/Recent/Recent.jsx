import React from 'react';
import { ProgramCard } from "../";
import { findLatestEpisode, findNextEpisode, calculateMillisecondsToDays } from '../../helper';
import { useGlobalContext } from "../../context";

const Recent = () => {

    const { state: { runningWatchlist } } = useGlobalContext();

    const recentWatchlist = runningWatchlist.filter((program) => findLatestEpisode(program).id !== program.episodes[program.episodes.length - 1] && findNextEpisode(program) !== undefined && calculateMillisecondsToDays(new Date() - Date.parse(findLatestEpisode(program).airstamp)) < 7).map((program) => {
        program.status = 'Recent';
        return program;
    });

    console.log(recentWatchlist);

    return (
        <div>
            {
                recentWatchlist.map((program) => {
                    const { id } = program;
                    return (
                        <ProgramCard key={id} {...program} latestEpisode={findLatestEpisode(program)}/>
                    )
                })
            }
        </div>
    )
}

export default Recent
