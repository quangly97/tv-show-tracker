import React, {useState, useContext, createContext} from 'react'
import axios from 'axios'

const AppContext = createContext();

const AppProvider = ({children}) => {
    const url = 'http://api.tvmaze.com/search/shows?q=';
    
    const [result, setResult] = useState([]);
    
    const getTVShows = async (title) => {
        const response = await axios.get(`${url}${title}`);
        console.log(response.data);
        setResult(response);
    }

    return (
        <AppContext.Provider value={{
            getTVShows,
            result
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider};