import React from 'react'
import { useGlobalContext } from '../../context'
import { Link } from "react-router-dom";
import { getMonth, getDay, get12hrTime } from "../../helper";

const ProgramCard = ({ id, name, image, status, schedule, network, nextEpisode }) => {
    const { dispatch } = useGlobalContext();

    const removeProgram = (id) => {
        dispatch({ type: 'REMOVE_PROGRAM', payload: id })
    };
    
    const getNextAirDate = () => {
        const today = (new Date()).getDay();
        const diff = (getDay(schedule.days[0]) - today) % 7;

        if(diff === 0){
            return <h4>{get12hrTime(schedule.time)}</h4>
        }else if(diff === 1){
            return <h4>TOMORROW</h4>
        }else{
            return <h4>{`${diff} DAYS`}</h4>
        }
    }

    const description = () => {
        if(status === 'Ended'){
            return <h4>ENDED</h4>
        }else if(status === 'To Be Announced'){
            return <h4>TO BE ANNOUNCED</h4>
        }else if(status === 'Upcoming'){
            const { season, number, name, airdate, airstamp } = nextEpisode;
            return (
                <div>
                    <h4>{`S${season < 10 ? `0${season}` : season}E${number < 10 ? `0${number}` : number} | ${name}`}</h4>
                    <h4>{`${schedule.days[0]} | ${getMonth(airdate.substring(5,7))} ${airdate.substring(8,10)} | ${airdate.substring(0, 4)} | ${network && network.name}`}</h4>
                    {getNextAirDate()}
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
