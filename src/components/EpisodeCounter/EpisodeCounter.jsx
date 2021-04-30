import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const EpisodeCounter = ({ program }) => {

    const [currentEpisode, setCurrentEpisode] = useState({});

    useEffect(() => {
        const current = program.episodes.find((episode) => episode.watched === false);
        setCurrentEpisode(current);
    }, [currentEpisode])

    const handleClick = (id) => {
        const current = program.episodes.find((episode) => episode.id === id);
        current.watched = true;
        program.unseenEpisodes -= 1;
        const watched = {...currentEpisode, watched: true}
        setCurrentEpisode(watched);
    }

    const getName = (name) => {
        const newName = name.replace(/\s/g, "-").toLowerCase();
        return newName;
    };

    return (
        <div>
            {
                currentEpisode && (
                    <div>
                        <h2>{program.name}</h2>
                        <h3>{program.unseenEpisodes}</h3>
                        <Link to={`/${getName(program.name)}/${currentEpisode.id}`}><h4>{currentEpisode.name}</h4></Link>
                        <h5>{`S${currentEpisode.season} | E${currentEpisode.number}`}</h5>
                        <button className='btn' onClick={() => handleClick(currentEpisode.id)}>Checkmark</button>
                    </div>
                )
            }
        </div>
    )
}

export default EpisodeCounter
