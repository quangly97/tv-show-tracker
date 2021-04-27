import React, { useState, useEffect } from 'react'
import { getMonth } from './getMonth'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const ProgramInformation = () => {
    const { id } = useParams();
    const { state } = useGlobalContext();
    const currentProgram = state.watchlist.find((program) => program.id === parseInt(id));
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
      setTrigger(false);
    }, [trigger])

    const handleClick = (episode) => {
      episode.watched = !episode.watched;
      setTrigger(true);
    }

    return (
        <div>
            <h3>{currentProgram.name}</h3>
            {
                currentProgram.episodes.map((episode) => {
                    const { id, name, season, number, airdate, watched } = episode;
                    return (
                      <section key={id}>
                        <span>
                          <h4>{`${name} - S${season} | E${number}`}</h4>
                          <h5>{`${getMonth(airdate.substring(5,7))} ${airdate.substring(8,10)} | ${airdate.substring(0,4)}`}</h5>
                          <button className="btn" onClick={() => handleClick(episode)}>{`${watched}`}</button>
                        </span>
                      </section>
                    );
                })
              }
        </div>
    )
}

export default ProgramInformation
