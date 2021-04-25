import React from 'react'
import { useGlobalContext } from '../../context'

const ProgramCard = ({id, name}) => {
    const { dispatch } = useGlobalContext();

    const removeProgram = (id) => {
        dispatch({ type: 'REMOVE_PROGRAM', payload: id })
    };

    return (
        <article>
            <h3>{name}</h3>
            <button className='btn' onClick={() => removeProgram(id)}>Remove</button>
        </article>
    )
}

export default ProgramCard
