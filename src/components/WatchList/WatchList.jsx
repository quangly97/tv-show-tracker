import React, { useState } from 'react'
import { useGlobalContext } from "../../context";
import { ProgramCard } from '../'

const WatchList = () => {

    const { state: { endedWatchlist, runningWatchlist }} = useGlobalContext();
    const [showEnded, setShowEnded] = useState(true);
    const [showTBA, setShowTBA] = useState(true);
    const [showUpcoming, setShowUpcoming] = useState(true);

    const findLatestEpisode = (program) => {
        const today = new Date();
        for(var i = program.episodes.length - 1; i >= 0; i--){
            const episode = program.episodes[i];
            const airdate = Date.parse(episode.airstamp);

            if(today - airdate >= 0){
                return episode;
            }
        }
    }

    const findNextEpisode = (program) => {
        const today = new Date();
        return program.episodes.find((episode) => today - Date.parse(episode.airdate) < 0);
    }

    const upcomingWatchlist = runningWatchlist.filter((program) => findLatestEpisode(program).id !== program.episodes[program.episodes.length - 1].id).map((program) => {
        program.status = 'Upcoming';
        return program;
    });


    const tbaWatchlist = runningWatchlist.filter((program) => findLatestEpisode(program).id === program.episodes[program.episodes.length - 1].id).map((program) => {
        program.status = 'To Be Announced';
        return program;
    });

    return (
        <div>
            <h2 onClick={() => setShowUpcoming(!showUpcoming)}>UPCOMING</h2>
            {
                showUpcoming && (upcomingWatchlist.map((program) => {
                    const { id } = program;
                    return (
                        <ProgramCard key={id} {...program} nextEpisode={findNextEpisode(program)}/>
                    );
                }))
            }
            <h2 onClick={() => setShowTBA(!showTBA)}>TO BE ANNOUNCED</h2>
            {
                showTBA && (tbaWatchlist.map((program) => {
                    const { id } = program
                    return (
                        <ProgramCard key={id} {...program}/>
                    );
                }))
            }
            <h2 onClick={() => setShowEnded(!showEnded)}>ENDED</h2>
            {
                showEnded && (endedWatchlist.map((program) => {
                    const { id } = program
                    return (
                        <ProgramCard key={id} {...program}/>
                    );
                }))
            }
        </div>
    )
}

export default WatchList
