import React from 'react';
import { useGlobalContext } from '../../context';
import { Link } from "react-router-dom";
import { getMonth, getDay, calculateMillisecondsToDays, get12hrTime, getModulus } from "../../helper";

const ProgramCard = ({ id, name, image, status, schedule, network, webChannel, latestEpisode, nextEpisode }) => {
    const { dispatch } = useGlobalContext();

    const removeProgram = (id) => {
        dispatch({ type: 'REMOVE_PROGRAM', payload: id })
    }

    const getLatestAirDate = (airstamp) => {
        const today = new Date();
        const todayDay = today.getDay();
        const difference = calculateMillisecondsToDays(today - Date.parse(airstamp));
        const latestAirDay = getModulus(todayDay - getDay(schedule.days[0]));
        const latest = latestAirDay === 0 && difference > 1 ? 7 : latestAirDay;

        if(latest === 0){
            return <h4>{get12hrTime(schedule.time)}</h4>
        }else if(latest === 1){
            return <h4>YESTERDAY</h4>
        }else{
            return <h4>{`${latest} DAYS`}</h4>
        }
    }
    
    const getNextAirDate = (airstamp) => {
        const today = new Date();
        const todayDay = today.getDay();
        const difference = calculateMillisecondsToDays(Date.parse(airstamp) - today);
        const nextAirDay = getModulus(getDay(schedule.days[0]) - todayDay);
        const next = difference > 0 && difference < 7 ? nextAirDay : nextAirDay + 7;

        if(next === 0){
            return <h4>{get12hrTime(schedule.time)}</h4>
        }else if(next === 1){
            return <h4>TOMORROW</h4>
        }else{
            return <h4>{`${next} DAYS`}</h4>
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
                    <h4>{`${schedule.days[0] || 'TBD'} | ${getMonth(airdate.substring(5,7))} ${airdate.substring(8,10)} | ${airdate.substring(0,4)} | ${network ? network.name : webChannel.name}`}</h4>
                    {getNextAirDate(airstamp)}
                </div>
            )
        }else if(status === 'Recent'){
            const { season, number, name, airdate, airstamp } = latestEpisode;
            return (
                <div>
                    <h4>{`S${season < 10 ? `0${season}` : season}E${number < 10 ? `0${number}` : number} | ${name}`}</h4>
                    <h4>{`${schedule.days[0] || 'TBD'} | ${getMonth(airdate.substring(5,7))} ${airdate.substring(8,10)} | ${airdate.substring(0,4)} | ${network ? network.name : webChannel.name}`}</h4>
                    {getLatestAirDate(airstamp)}
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

export default ProgramCard;
