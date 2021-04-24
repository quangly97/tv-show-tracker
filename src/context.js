import React, { useState, useContext, createContext } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const url = "http://api.tvmaze.com/search/shows?q=";
  const [programs, setPrograms] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  const getPrograms = async (title) => {
    if (title) {
      const response = await axios.get(`${url}${title}`);
      setPrograms(response.data);
    }
  };

  const getEpisodes = async (id) => {
    if(id){
      const episodeData = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`)
      setEpisodes(episodeData.data);
    }
  }

  return (
    <AppContext.Provider
      value={{
        getPrograms,
        getEpisodes,
        programs,
        watchlist,
        setWatchlist,
        episodes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
