import React, { useState, useEffect } from 'react'
import { getMonth } from './getMonth'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const ProgramInformation = () => {
    const { id } = useParams();
    const { state: {watchlist} } = useGlobalContext();
    const currentProgram = watchlist.find((program) => program.id === parseInt(id));
    var currentEpisode = currentProgram.episodes.find((episode) => episode.watched === false);
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
      setTrigger(false);
      currentEpisode = currentProgram.episodes.find((episode) => episode.watched === false);
    }, [trigger])

    const toggleWatched = (episode, index) => {
      episode.watched = !episode.watched;
      if(currentEpisode && currentEpisode.id !== episode.id && episode.watched === true){
        togglePrevious(index);
      }
      setTrigger(true);
    }

    const togglePrevious = (index) => {
      const episodelist = currentProgram.episodes;
      for(var i = 0; i < index; i++){
        episodelist[i].watched = true;
      }
    }

    return (
        <div>
            <h3>{currentProgram.name}</h3>
            {
                currentProgram.episodes.map((episode, index) => {
                    const { id, name, season, number, airdate, watched } = episode;
                    return (
                      <section key={id}>
                        <span>
                          <h4>{`${name} - S${season} | E${number}`}</h4>
                          <h5>{`${getMonth(airdate.substring(5,7))} ${airdate.substring(8,10)} | ${airdate.substring(0,4)}`}</h5>
                          <button className="btn" onClick={() => toggleWatched(episode, index)}>{`${watched}`}</button>
                        </span>
                      </section>
                    );
                })
              }
        </div>
    )
}

export default ProgramInformation
