import React, { useCallback } from "react";
import { Movie } from "../../interfaces/movies.interface";
import { useNavigate } from "react-router-dom";

import "./movie-card.component.scoped.scss";

interface Props {
  movie: Movie;
}

export default ({ movie }: Props) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/movie/${movie?.id}`);
  }, []);

  return (
    <button key={movie?.id} className="movie-card" onClick={handleClick}>
      <img
        src={`${process.env.REACT_APP_THE_MOVIE_DB_IMAGE_URL}${movie?.poster_path}`}
        alt={movie?.title}
        width={30}
        height={30}
      />
      <h3>{movie?.title}</h3>
      <p>{movie?.overview}</p>
    </button>
  );
};
