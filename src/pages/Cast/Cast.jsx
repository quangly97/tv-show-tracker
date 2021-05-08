import React from 'react'
import { useGlobalContext } from '../../context'
import { useParams, Link } from 'react-router-dom'

const Cast = () => {

    const { id } = useParams();
    const { state: { watchlist } } = useGlobalContext();

    const findCast = (id) => {
        const currentProgram = watchlist.find((program) => Number(id) === program.id);
        return currentProgram;
    }

    const { cast } = findCast(id);

    return (
        <div>
            <Link to={`/information/${id}`}><button className='btn'>{`<`}</button></Link>
            <h1>Cast</h1>
            {
                cast.map((actor) => {
                    const { id, actorName, characterName, characterImage } = actor;
                    return (
                        <section key={id}>
                            <h4>{actorName}</h4>
                            <h4>{characterName}</h4>
                            <img src={characterImage && characterImage.medium}/>
                        </section>
                    )
                })
            }
        </div>
    )
}

export default Cast
