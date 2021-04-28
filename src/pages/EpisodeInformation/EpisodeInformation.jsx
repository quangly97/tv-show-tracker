import React from 'react'
import { useParams } from "react-router-dom";
import { useGlobalContext } from '../../context'
import parse from 'html-react-parser'
import { Timer } from '../../components'

const EpisodeInformation = () => {

    const { id } = useParams();
    const { state: {episodelist} } = useGlobalContext();
    const currentEpisode = episodelist.find((episode) => Number(id) === episode.id);
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
      </div>
    );
}

export default EpisodeInformation
