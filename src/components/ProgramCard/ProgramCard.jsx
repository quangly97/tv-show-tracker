import React from 'react'
import { useGlobalContext } from '../../context'
import { Link } from "react-router-dom";
import { getMonth } from "../../helper";

const ProgramCard = ({ id, name, image, status, schedule, network, nextEpisode }) => {
    const { dispatch } = useGlobalContext();

    const removeProgram = (id) => {
        dispatch({ type: 'REMOVE_PROGRAM', payload: id })
    };

    const description = () => {
        if(status === 'Ended'){
            return <h4>ENDED</h4>
        }else if(status === 'To Be Announced'){
            return <h4>TO BE ANNOUNCED</h4>
        }else if(status === 'Upcoming'){
            const { season, number, name, airdate } = nextEpisode;
            return (
                <div>
                    <h4>{`S${season < 10 ? `0${season}` : season}E${number < 10 ? `0${number}` : number} | ${name}`}</h4>
                    <h4>{`${schedule.days[0]} | ${getMonth(airdate.substring(5,7))} ${airdate.substring(8,10)} | ${airdate.substring(0, 4)} | ${network && network.name}`}</h4>
                </div>
            )
        }
    }

    return (
        <section>
            <Link to={`/programinformation/${id}`}><h3>{name}</h3></Link>
            {description()}
            <img src={image && image.medium} alt={name}/>
            <button className='btn' onClick={() => removeProgram(id)}>Remove</button>
        </section>
    )
}

export default ProgramCard
