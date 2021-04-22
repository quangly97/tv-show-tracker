import React, { useState, useContext, createContext } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const url = "http://api.tvmaze.com/search/shows?q=";
  const [programs, setPrograms] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const getPrograms = async (title) => {
    if (title) {
      const response = await axios.get(`${url}${title}`);
      console.log(response.data);
      setPrograms(response.data);
    }
  };

  return (
    <AppContext.Provider
      value={{
        getPrograms,
        programs,
        watchlist,
        setWatchlist,
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
