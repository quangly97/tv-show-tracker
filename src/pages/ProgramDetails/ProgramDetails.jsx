import React from 'react';
import { Information, Loading } from '../../components';
import { useGlobalContext } from '../../context';

const ProgramDetails = () => {

    const { state: { watchlist } } = useGlobalContext();

    return (
        <div>
            {
                watchlist.length > 0 ? <Information watchlist={watchlist} /> : <Loading/>
            }
        </div>
    )
}

export default ProgramDetails;
