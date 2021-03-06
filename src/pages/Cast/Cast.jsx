import React from 'react';
import { CastResults, Loading } from '../../components';
import { useGlobalContext } from '../../context';

const Cast = () => {

    const { state: { watchlist } } = useGlobalContext();

    return (
        <div>
            {
                watchlist.length > 0 ? <CastResults watchlist={watchlist} /> : <Loading/>
            }
        </div>
    )
}

export default Cast;
