import React, { useState, useEffect } from 'react'
import { data } from '../../data'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const ProgramInformation = () => {
    const { id } = useParams();
    const { getEpisodes, episodes } = useGlobalContext();
    const [show, setShow] = useState('');

    useEffect(() => {
        console.log(id);
        getEpisodes(id);
        const currentShow = data.find((program) => program.id === parseInt(id));
        setShow(currentShow.name);
        console.log(episodes);
    }, [id]);

    return (
        <div>
            <h3>{show}</h3>
            {
                episodes.map((episode) => {
                    const { id, name, season, number } = episode;
                    return (
                      <section key={id}>
                        <h4>{`${name} - Season: ${season} Episode: ${number}`}</h4>
                      </section>
                    );
                })
            }
        </div>
    )
}

export default ProgramInformation
