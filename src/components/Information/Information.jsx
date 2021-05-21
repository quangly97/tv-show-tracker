import React from 'react';
import { Link, useParams } from 'react-router-dom';
import parse from "html-react-parser";
import { get12hrTime, getName } from '../../helper';

const Information = ({ watchlist }) => {
    const { id } = useParams();

    const findProgram = (id) => {
        const currentProgram = watchlist.find((program) => Number(id) === program.id);
        return currentProgram;
    }

    const { name, image, summary, premiered, genres, schedule, network, webChannel } = findProgram(id);

    return (
        <div>
            <Link to={`/${id}/${getName(name)}/episodes`}><button className='btn'>{`< Episodes`}</button></Link>
            <Link to={`/${id}/${getName(name)}/cast`}><button className='btn'>{`Cast >`}</button></Link>
            <h1>Information</h1>
            <h2>{name}</h2>
            <img src={image && image.medium} alt={name}/>
            {genres.map((genre, index) => {
                return <p key={index}>{`${genre},`}</p>;
            })}
            <h4>{schedule.days[0]}</h4>
            <h4>{get12hrTime(schedule.time)}</h4>
            <h4>{network !== null ? network.name : webChannel.name}</h4>
            <h4>{premiered.substring(0,4)}</h4>
            <h3>OVERVIEW</h3>
            <h4>{summary && parse(summary)}</h4>
        </div>
    );
}

export default Information;
