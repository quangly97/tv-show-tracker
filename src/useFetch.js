import React, {useState} from 'react'
import axios from 'axios'

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [episodes, setEpisodes] = useState([])

    const episodes = axios.get(url)
    .then(res => {
      console.log(res.data);
    })

    return {loading, episodes}
}
