import React, {useState, useEffect} from 'react'

const EpisodeCounter = ({name, episodes}) => {

    const [currentEpisode, setCurrentEpisode] = useState({});
    const [episodesLeft, setEpisodesLeft] = useState(0);

    useEffect(() => {
        const current = episodes.find((episode) => episode.watched === false);
        setCurrentEpisode(current);
        const count = episodes.filter((episode) => episode.watched === false).length;
        setEpisodesLeft(count);
    }, [currentEpisode])

    const handleClick = (id) => {
        const current = episodes.find((episode) => episode.id === id);
        current.watched = true;
        const watched = {...currentEpisode, watched: true}
        setCurrentEpisode(watched);
    }

    return (
        <div>
            <h2>{name}</h2>
            <h3>{episodesLeft}</h3>
            <h4>{currentEpisode.name}</h4>
            <h5>{`S${currentEpisode.season} | E${currentEpisode.number}`}</h5>
            <button className='btn' onClick={() => handleClick(currentEpisode.id)}>Checkmark</button>
        </div>
    )
}

export default EpisodeCounter
