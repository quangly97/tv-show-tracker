import React from 'react';
import { useGlobalContext } from '../../context';
import { Link } from 'react-router-dom';

const WatchlistSearchResults = () => {

    const { programs } = useGlobalContext();

    return (
        <div>
            {
                programs && programs.map((program) => {
                    const { id, name, image, network, webChannel } = program;
                    return (
                        <div key={id}>
                            <Link to={`/programinformation/${id}`}><h3>{name}</h3></Link>
                            <img src={image && image.medium} alt={name}/>
                            <h4>{network !== null ? network.name : webChannel.name}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default WatchlistSearchResults;
