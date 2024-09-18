import React, { PropsWithChildren, useState } from "react";
import MoviesContext from "./movies-context";
import { MovieContext } from "../../interfaces/movies.interface";

interface Props extends PropsWithChildren {}

export default ({ children }: Props) => {
  const [movieList, setMovieList] = useState([]);

  const value: MovieContext = {
    movieList,
    setMovieList,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};
