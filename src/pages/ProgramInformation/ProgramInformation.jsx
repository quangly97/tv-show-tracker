import React, { useState, useEffect } from 'react'
import { data } from '../../data'
import { useParams } from 'react-router-dom'

const ProgramInformation = () => {
    const { id } = useParams();
    const [show, setShow] = useState('');

    useEffect(() => {
        console.log(id);
        const currentShow = data.find((program) => program.id === parseInt(id));
        setShow(currentShow.name);
    }, []);

    return (
        <div>
            <h1>{show}</h1>
        </div>
    )
}

export default ProgramInformation
