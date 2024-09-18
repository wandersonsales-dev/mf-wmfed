import React, { useContext } from "react";
import MoviesContext from "../../contexts/movies/movies-context";
import MovieCard from "../movie-card/movie-card.component";

import "./movie-list.component.scoped.scss";

export default () => {
  const { movieList } = useContext(MoviesContext);

  return (
    <div className="movie-list">
      {movieList?.map((movie: any) => (
        <MovieCard key={movie?.id} movie={movie} />
      ))}
    </div>
  );
};
