import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getName } from "../../helper";

const CastResults = ({ watchlist }) => {

    const { id } = useParams();

    const findCast = (id) => {
        const currentProgram = watchlist.find((program) => Number(id) === program.id);
        return currentProgram;
    }

    const { name, cast } = findCast(id);

    return (
        <div>
            <Link to={`/${id}/${getName(name)}/information`}><button className='btn'>{`<`}</button></Link>
            <h1>Cast</h1>
            {
                cast.map((actor) => {
                    const { id, actorName, characterName, characterImage } = actor;
                    return (
                        <section key={id}>
                            <h4>{actorName}</h4>
                            <h4>{characterName}</h4>
                            <img src={characterImage && characterImage.medium} alt={characterName}/>
                        </section>
                    )
                })
            }
        </div>
    )
}

export default CastResults;
