import React from 'react'
import { useParams } from "react-router-dom";
import { useGlobalContext } from '../../context'
import parse from 'html-react-parser'
import { Timer } from '../../components'

const EpisodeInformation = () => {

    const findEpisode = () => {
      for (var i = 0; i < watchlist.length; i++) {
        const program = watchlist[i];
        for (var j = 0; j < program.episodes.length; j++) {
          const episode = program.episodes[j];
          if (episode.id === Number(id)) {
              return episode;
          }
        }
      }
      return {};
    };

    
    const { id } = useParams();
    const { state: { watchlist } } = useGlobalContext();
    const currentEpisode = findEpisode();
    const {name, season, number, airdate, airstamp, image, summary} = currentEpisode;

    return (
      <div>
        {console.log(currentEpisode)}
        <h4>{name}</h4>
        <h4>{season}</h4>
        <h4>{number}</h4>
        <h4>{airdate}</h4>
        {image && <img alt={name} src={image.medium} />}
        {summary && parse(summary)}
        <Timer airstamp={airstamp}/>
      </div>
    );
}

export default EpisodeInformation
