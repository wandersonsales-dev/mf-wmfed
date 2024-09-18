import React, { useCallback } from "react";
import { Movie } from "../../interfaces/movies.interface";

import "./movie-card.component.scoped.scss";

interface Props {
  movie: Movie;
}

export default ({ movie }: Props) => {
  const handleClick = useCallback(() => {
    alert(movie?.title);
  }, []);

  return (
    <button key={movie?.id} className="movie-card" onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt={movie?.title}
        width={30}
        height={30}
      />
      <h3>{movie?.title}</h3>
      <p>{movie?.overview}</p>
    </button>
  );
};
