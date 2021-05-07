import React, { useState, useEffect } from 'react'
import { EpisodeCounter } from '../../components/'
import { useGlobalContext } from '../../context'

const ToWatch = () => {

    const { state: { watchlist }, dispatch } = useGlobalContext();
    const [sort, setSort] = useState('Number of episodes descending');
    const [sorted, setSorted] = useState(false);

    const handleChange = (e) => {
        setSort(e.target.value);
    }

    useEffect(() => {
        dispatch({ type: "SET_PAGE", payload: "towatch" });
    }, []);

    useEffect(() => {
        if(sort === 'Number of episodes descending'){
            dispatch({ type: 'SORT_DESCENDING' });
        }else if(sort === 'Number of episodes ascending'){
            dispatch({ type: 'SORT_ASCENDING' });
        }else if(sort === 'Alphabetical'){
            dispatch({ type: 'SORT_ALPHABETICAL'});
        }
    },[sort, sorted]);

    return (
        <div>
            <select onChange={handleChange}>
                <option value="Number of episodes descending">Number of episodes descending</option>
                <option value="Number of episodes ascending">Number of episodes ascending</option>
                <option value="Alphabetical">Alphabetical</option>
            </select>
            {
                watchlist.map((program) => {
                    return <EpisodeCounter key={program.id} program={program} sorted={sorted} setSorted={setSorted} />;
                })
            }
        </div>
    )
}

export default ToWatch