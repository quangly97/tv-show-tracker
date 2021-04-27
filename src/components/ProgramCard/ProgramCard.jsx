import React from 'react'
import { useGlobalContext } from '../../context'
import { Link } from "react-router-dom";

const ProgramCard = ({id, name}) => {
    const { dispatch } = useGlobalContext();

    const removeProgram = (id) => {
        dispatch({ type: 'REMOVE_PROGRAM', payload: id })
    };

    return (
        <article>
            <Link to={`/programinformation/${id}`}><h3>{name}</h3></Link>
            <button className='btn' onClick={() => removeProgram(id)}>Remove</button>
        </article>
    )
}

export default ProgramCard
