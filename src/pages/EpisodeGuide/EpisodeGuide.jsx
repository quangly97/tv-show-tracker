import React from 'react';
import { ProgramInformation, Loading } from '../../components';
import { useGlobalContext } from '../../context';

const EpisodeGuide = () => {

    const { state: { watchlist } } = useGlobalContext();

    return (
        <div>
            {
                watchlist.length > 0 ? <ProgramInformation watchlist={watchlist}/> : <Loading/>
            }
        </div>
    )
}

export default EpisodeGuide;
