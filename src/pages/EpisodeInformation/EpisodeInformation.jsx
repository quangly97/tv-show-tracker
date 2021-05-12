import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from '../../context';
import parse from 'html-react-parser';
import { Timer } from '../../components';
import { getName } from '../../helper';

const EpisodeInformation = () => {

    const findEpisode = () => {
      for (var i = 0; i < watchlist.length; i++) {
        const program = watchlist[i];
        const list = program.episodes;
        
        for(var j = 0; j < list.length; j++){
          const episode = list[j]
          if(episode.id === Number(id)){
            const currentEpisode = episode;
            if(j === 0 && j === list.length - 1){
              return {
                program,
                prevEpisode: -1,
                currentEpisode,
                nextEpisode: -1
              }
            }else if(j === 0){
              return {
                program,
                prevEpisode: -1,
                currentEpisode,
                nextEpisode: list[j + 1].id,
              }
            }else if(j === list.length - 1){
              return {
                program,
                prevEpisode: list[j - 1].id,
                currentEpisode,
                nextEpisode: -1,
              }
            }else{
              return {
                program,
                prevEpisode: list[j - 1].id,
                currentEpisode,
                nextEpisode: list[j + 1].id,
              }
            }
          }
        }
      }
    }

    const { id } = useParams();
    const { state: { watchlist, previousPage } } = useGlobalContext();
    const { program, currentEpisode, prevEpisode, nextEpisode } = findEpisode();
    const [toggle, setToggle] = useState(false);
    
    const toggleWatched = () => {
      setToggle(true);
      currentEpisode.watched = !currentEpisode.watched;
      if (currentEpisode.watched) {
        program.unseenEpisodes--;
      } else {
        program.unseenEpisodes++;
      }
    }

    useEffect(() => {
      setToggle(false);
    }, [toggle]);

    return (
      <div>
        <div>
          {
            previousPage === 'episode' ? <Link to={`/programinformation/${program.id}`}><button className='btn'>{`< Episodes`}</button></Link> : <Link to={'/towatch'}><button className='btn'>{`< To Watch`}</button></Link>
          }
        </div>
        <h2>{program.name}</h2>
        <h4>{currentEpisode.name}</h4>
        <h4>{currentEpisode.season}</h4>
        <h4>{currentEpisode.number}</h4>
        <h4>{currentEpisode.airdate}</h4>
        {currentEpisode.image && <img alt={currentEpisode.name} src={currentEpisode.image.medium} />}
        {currentEpisode.summary && parse(currentEpisode.summary)}
        <button className='btn' onClick={toggleWatched}>{`${currentEpisode.watched}`}</button>
        <Timer airstamp={currentEpisode.airstamp}/>
        {prevEpisode > 0 && <Link to={`/${getName(program.name)}/${prevEpisode}`}><button className='btn'>Previous</button></Link>}
        {nextEpisode > 0 && <Link to={`/${getName(program.name)}/${nextEpisode}`}><button className='btn'>Next</button></Link>}
      </div>
    );
}

export default EpisodeInformation;
