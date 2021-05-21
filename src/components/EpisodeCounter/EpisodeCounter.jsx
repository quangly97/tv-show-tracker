import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getName } from '../../helper';

const EpisodeCounter = ({ program, setSorted }) => {

    const [currentEpisode, setCurrentEpisode] = useState({});

    useEffect(() => {
        const current = program.episodes.find((episode) => episode.watched === false);
        setCurrentEpisode(current);
        setSorted(true);
    }, [currentEpisode]);

    const handleClick = (id) => {
        const current = program.episodes.find((episode) => episode.id === id);
        current.watched = true;
        program.unseenEpisodes--;
        const watched = {...currentEpisode, watched: true}
        setCurrentEpisode(watched);
        setSorted(false);
    }

    return (
        <div>
            {
                currentEpisode && (
                    <div>
                        <h2>{program.name}</h2>
                        <h3>{program.unseenEpisodes}</h3>
                        <Link to={`${program.id}/${getName(program.name)}/${currentEpisode.id}`}><h4>{currentEpisode.name}</h4></Link>
                        <h5>{`S${currentEpisode.season} | E${currentEpisode.number}`}</h5>
                        <button className='btn' onClick={() => handleClick(currentEpisode.id)}>Checkmark</button>
                    </div>
                )
            }
        </div>
    )
}

export default EpisodeCounter;
