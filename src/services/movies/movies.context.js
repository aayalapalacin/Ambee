import React, { useState, useEffect, createContext } from "react";
import { movieService } from "./movies.service";

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNextRoundReady, setIsNextRoundReady] = useState(false);
  // const [error, setError] = useState(null);

  const retrieveMovies = () => {
    setIsLoading(true);
    movieService()
      .then((results) => {
        setMovies(results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  const updateMovieCards = (nextRoundMovies) => {
    setIsLoading(true);
    setMovies(nextRoundMovies);
    setIsNextRoundReady(true);
    console.log("we're in the context provider");
    setIsLoading(false);
  };
  const nextRoundFunc = () => {
    setIsNextRoundReady(false);
  };
  useEffect(() => {
    retrieveMovies();
    nextRoundFunc();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        isLoading,
        isNextRoundReady,
        onNextRound: updateMovieCards,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
