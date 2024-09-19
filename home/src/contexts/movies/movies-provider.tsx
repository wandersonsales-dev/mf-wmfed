import React, { PropsWithChildren, useState } from "react";
import MoviesContext from "./movies-context";
import { MovieContext, MovieList } from "../../interfaces/movies.interface";

interface Props extends PropsWithChildren {}

export default ({ children }: Props) => {
  const [movieList, setMovieList] = useState<MovieList | {}>({});
  const [search, setSearch] = useState("");

  const value: MovieContext | {} = {
    movieList,
    setMovieList,
    search,
    setSearch,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};
