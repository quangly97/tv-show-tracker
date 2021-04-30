import React, { useState, useEffect, useContext, createContext, useReducer } from "react";
import axios from "axios";
import { reducer } from './reducer'

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const url = "http://api.tvmaze.com/";
  const [programs, setPrograms] = useState([]);

  const defaultState = {
    watchlist: [],
    isModalOpen: false,
    modalContent: '',
  }
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('watchlist'));
    dispatch({ type: 'INTIALIZE_PROGRAMS', payload: list });
  },[]);

  const getPrograms = async (title) => {
    if (title) {
      const response = await axios.get(`${url}search/shows?q=${title}`);
      setPrograms(response.data);
    }else{
      dispatch({ type: 'NO_INPUT' })
    }
  };

  const getEpisodes = async (id) => {
    if(id){
      const episodeData = await axios.get(`${url}shows/${id}/episodes`);
      return episodeData.data;
    }
  }

  return (
    <AppContext.Provider
      value={{
        getPrograms,
        getEpisodes,
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
