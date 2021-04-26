import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const ProgramInformation = () => {
    const { id } = useParams();
    const { state } = useGlobalContext();
    const currentProgram = state.watchlist.find((program) => program.id === parseInt(id));

    return (
        <div>
            <h3>{currentProgram.name}</h3>
            {
                currentProgram.episodes.map((episode) => {
                    const { id, name, season, number } = episode;
                    return (
                      <section key={id}>
                        <h4>{`${name} - S${season} | E${number}`}</h4>
                      </section>
                    );
                })
            }
        </div>
    )
}

export default ProgramInformation
