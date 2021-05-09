import React, { useState, useEffect, useContext, createContext, useReducer } from "react";
import axios from "axios";
import { reducer } from './reducer'

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const url = "http://api.tvmaze.com";
  const [programs, setPrograms] = useState([]);

  const defaultState = {
    watchlist: [],
    endedWatchlist: [],
    runningWatchlist: [],
    isModalOpen: false,
    modalContent: '',
    previousPage: ''
  }
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist'));
    const endedWatchlist = JSON.parse(localStorage.getItem("endedWatchlist"));
    const runningWatchlist = JSON.parse(localStorage.getItem("runningWatchlist"));
    dispatch({ type: 'INTIALIZE_PROGRAMS', payload: [watchlist, endedWatchlist, runningWatchlist] });
  },[]);

  const getPrograms = async (title) => {
    if (title) {
      const response = await axios.get(`${url}/search/shows?q=${title}`);
      setPrograms(response.data);
    }else{
      setPrograms([]);
    }
  };

  const getEpisodes = async (id) => {
    if(id){
      const episodeData = await axios.get(`${url}/shows/${id}/episodes`);
      return episodeData.data;
    }
  }

  const getCast = async (id) => {
    if(id){
      const cast = await axios.get(`${url}/shows/${id}/cast`)
      return cast.data;
    }
  }

  return (
    <AppContext.Provider
      value={{
        getPrograms,
        getEpisodes,
        getCast,
        dispatch,
        state,
        programs,
        setPrograms
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
