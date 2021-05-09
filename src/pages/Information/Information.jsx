import React from 'react'
import { useGlobalContext } from '../../context'
import { Link, useParams } from 'react-router-dom'
import parse from "html-react-parser";

const Information = () => {
    const { id } = useParams();
    const { state: { watchlist } } = useGlobalContext();

    const findProgram = (id) => {
        const currentProgram = watchlist.find((program) => Number(id) === program.id);
        return currentProgram;
    }

    const { name, image, summary, premiered, genres, schedule, network } = findProgram(id);

    const get12hrTime = (time) => {
        let hr = Number(time.substring(0,2));
        let min = time.substring(3,5);

        if(hr === 0){
            return `12:${min} AM`
        }if(hr === 12){
            return `12:${min} PM`
        }if(hr > 12){
            return `${hr - 12}:${min} PM`;
        }else{
            return `${time} AM`;
        }
    }

    return (
        <div>
            <Link to={`/programinformation/${id}`}><button className='btn'>{`< Episodes`}</button></Link>
            <Link to={`/cast/${id}`}><button className='btn'>{`Cast >`}</button></Link>
            <h1>Information</h1>
            <h2>{name}</h2>
            <img src={image && image.medium} alt={name}/>
            {genres.map((genre, index) => {
                return <p key={index}>{`${genre},`}</p>;
            })}
            <h4>{schedule.days[0]}</h4>
            <h4>{get12hrTime(schedule.time)}</h4>
            <h4>{network.name}</h4>
            <h4>{premiered.substring(0,4)}</h4>
            <h3>OVERVIEW</h3>
            <h4>{summary && parse(summary)}</h4>
        </div>
    );
}

export default Information
