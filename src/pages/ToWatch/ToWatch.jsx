import React from 'react'
import { EpisodeCounter } from '../../components/'
import { useGlobalContext } from '../../context'

const ToWatch = () => {

    const { state } = useGlobalContext();

    const sorted = state.watchlist.sort((a, b) => {
        return b.episodes.length - a.episodes.length;
    })

    return (
        <div>
            {
                sorted.map((program) => {
                    const {id, name, episodes} = program;
                    return <EpisodeCounter key={id} name={name} episodes={episodes} />;
                })
            }
        </div>
    )
}

export default ToWatch