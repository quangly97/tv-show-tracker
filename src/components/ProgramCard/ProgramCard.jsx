import React from 'react'

const ProgramCard = ({name}) => {
    return (
        <article>
            <h3>{name}</h3>
            <button className='btn'>Remove</button>
        </article>
    )
}

export default ProgramCard
