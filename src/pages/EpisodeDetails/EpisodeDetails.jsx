import React from 'react';
import { Episode, Loading } from "../../components";
import { useGlobalContext } from "../../context";

const EpisodeDetails = () => {
  const { state: { watchlist } } = useGlobalContext();

    return (
        <div>
            {
                watchlist.length > 0 ? <Episode watchlist={watchlist} /> : <Loading/>
            }
        </div>
    )
}

export default EpisodeDetails
