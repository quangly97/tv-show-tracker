import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [episodes, setEpisodes] = useState([]);

    const getEpisodes = async () => {
        const response = await fetch(url);
        const episodes = await response.json();
        setEpisodes(episodes);
        setLoading(false);

        console.log(episodes);
    }

    useEffect(() => {
        getEpisodes();
    }, [url])

    return {loading, episodes}
}
