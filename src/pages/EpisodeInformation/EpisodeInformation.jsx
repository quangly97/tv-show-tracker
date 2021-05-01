import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from '../../context'
import parse from 'html-react-parser'
import { Timer } from '../../components'
import { getName } from '../../helper'

const EpisodeInformation = () => {

    const findEpisode = () => {
      for (var i = 0; i < watchlist.length; i++) {
        const list = watchlist[i].episodes;
        const program = watchlist[i].name;
        
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
              };
            }else if(j === list.length - 1){
              return {
                program,
                prevEpisode: list[j - 1].id,
                currentEpisode,
                nextEpisode: -1,
              };
            }else{
              return {
                program,
                prevEpisode: list[j - 1].id,
                currentEpisode,
                nextEpisode: list[j + 1].id,
              };
            }
          }
        }
      }
    };

    const { id } = useParams();
    const { state: { watchlist } } = useGlobalContext();
    const object = findEpisode();
    const currentEpisode = findEpisode().currentEpisode;
    const {name, season, number, airdate, airstamp, image, summary} = currentEpisode;

    return (
      <div>
        <h4>{name}</h4>
        <h4>{season}</h4>
        <h4>{number}</h4>
        <h4>{airdate}</h4>
        {image && <img alt={name} src={image.medium} />}
        {summary && parse(summary)}
        <Timer airstamp={airstamp}/>
        {object.prevEpisode > 0 && <Link to={`/${getName(object.program)}/${object.prevEpisode}`}><button>Previous</button></Link>}
        {object.nextEpisode > 0 && <Link to={`/${getName(object.program)}/${object.nextEpisode}`}><button>Next</button></Link>}
      </div>
    );
}

export default EpisodeInformation
