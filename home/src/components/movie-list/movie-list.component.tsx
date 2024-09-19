import React, { useCallback, useContext, useMemo } from "react";
import MoviesContext from "../../contexts/movies/movies-context";
import MovieCard from "../movie-card/movie-card.component";
import TheMovieDbService from "../../services/the-movie-db.service";

import "./movie-list.component.scoped.scss";

export default () => {
  const theMovieDbService = useMemo(() => new TheMovieDbService(), []);

  const { movieList, setMovieList, search } = useContext(MoviesContext);

  const handleClick = useCallback(async () => {
    const data = await theMovieDbService.searchMovie({
      query: search,
      page: Number(movieList.page) + 1,
    });
    setMovieList({
      ...data,
      results: [...movieList.results, ...data.results],
    });
  }, [movieList.page, search, theMovieDbService]);

  return (
    <div className="movie-list">
      {movieList?.results?.map((movie: any) => (
        <MovieCard key={movie?.id} movie={movie} />
      ))}
      {movieList?.page < movieList?.total_pages && (
        <button className="load-more" onClick={handleClick}>
          Carregar Mais...
        </button>
      )}
    </div>
  );
};
