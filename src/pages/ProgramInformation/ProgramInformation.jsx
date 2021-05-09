import React, { useState, useEffect } from 'react'
import { getMonth, getName } from '../../helper'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const ProgramInformation = () => {
    const { id } = useParams();
    const { state, dispatch } = useGlobalContext();
    const currentProgram = state.watchlist.find((program) => program.id === Number(id));
    var currentEpisode = currentProgram.episodes.find((episode) => episode.watched === false);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
      dispatch({ type: "SET_PAGE", payload: "episode" });
    }, []);

    useEffect(() => {
      setToggle(false);
      currentEpisode = currentProgram.episodes.find((episode) => episode.watched === false);
    }, [toggle])

    const toggleWatched = (episode, index) => {
      episode.watched = !episode.watched;
      if(episode.watched){
        currentProgram.unseenEpisodes--;
      }else{
        currentProgram.unseenEpisodes++;
      }
      if(currentEpisode && currentEpisode.id !== episode.id && episode.watched === true){
        togglePrevious(index);
      }
      setToggle(true);
    }

    const togglePrevious = (index) => {
      const episodelist = currentProgram.episodes;
      for(var i = 0; i < index; i++){
        if(episodelist[i].watched){
          continue;
        }else{
          episodelist[i].watched = true;
          currentProgram.unseenEpisodes--;
        }
      }
    }

    return (
        <div>
            <Link to={`/information/${id}`}><button className='btn'>{`Information >`}</button></Link>
            <h3>{currentProgram.name}</h3>
            {
                currentProgram.episodes.map((episode, index) => {
                    const { id, name, season, number, airdate, watched, image } = episode;
                    return (
                      <section key={id}>
                        <span>
                          <Link to={`/${getName(currentProgram.name)}/${id}`}><h4>{`${name} - S${season} | E${number}`}</h4></Link>
                          <h5>{`${getMonth(airdate.substring(5,7))} ${airdate.substring(8,10)} | ${airdate.substring(0,4)}`}</h5>
                          {image && <img alt={name} src={image.medium} />}
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
