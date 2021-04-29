import React, { useState, useEffect } from 'react'
import { EpisodeCounter } from '../../components/'
import { useGlobalContext } from '../../context'

const ToWatch = () => {

    const { state: { watchlist }, dispatch } = useGlobalContext();
    const [sort, setSort] = useState('Number of episodes descending');

    const sorted = watchlist.sort((a, b) => {
        return b.episodes.length - a.episodes.length;
    })

    const handleChange = (e) => {
        setSort(e.target.value);
    }

    useEffect(() => {
        if(sort === 'Number of episodes descending'){
            console.log(1);
            dispatch({ type: 'SORT_DESCENDING' });
        }else if(sort === 'Number of episodes ascending'){
            console.log(2);
            dispatch({ type: 'SORT_ASCENDING' });
        }else if(sort === 'Alphabetical'){
            console.log(3);
            dispatch({ type: 'SORT_ALPHABETICAL'})
        }
        console.log(watchlist);
    },[sort])

    return (
        <div>
            <select onChange={handleChange}>
                <option value="Number of episodes descending">Number of episodes descending</option>
                <option value="Number of episodes ascending">Number of episodes ascending</option>
                <option value="Alphabetical">Alphabetical</option>
            </select>
            {
                watchlist.map((program) => {
                    const {id, name, episodes} = program;
                    return <EpisodeCounter key={id} name={name} episodes={episodes} />;
                })
            }
        </div>
    )
}

export default ToWatch