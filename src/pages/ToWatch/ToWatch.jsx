import React from 'react'
import { EpisodeCounter } from '../../components/'
import { useGlobalContext } from '../../context'

const ToWatch = () => {

    const { state } = useGlobalContext();

    return (
        <div>
            {
                state.watchlist.map((program) => {
                    const {id, name, episodes} = program;
                    return <EpisodeCounter key={id} name={name} episodes={episodes} />;
                })
            }
        </div>
    )
}

export default ToWatch