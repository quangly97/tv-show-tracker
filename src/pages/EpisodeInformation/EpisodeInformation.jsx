import React from 'react'
import { useParams } from "react-router-dom";
import { useGlobalContext } from '../../context'
import parse from 'html-react-parser'

const EpisodeInformation = () => {

    const { id } = useParams();
    const { state: {episodelist} } = useGlobalContext();
    const currentEpisode = episodelist.find((episode) => Number(id) === episode.id);
    const {name, season, number, airdate, image: {medium}, summary} = currentEpisode;
    
    return (
      <div>
        <h4>{name}</h4>
        <h4>{season}</h4>
        <h4>{number}</h4>
        <h4>{airdate}</h4>
        <img alt={name} src={medium} />
        {summary && parse(summary)}
      </div>
    );
}

export default EpisodeInformation
