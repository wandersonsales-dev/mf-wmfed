import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Tags from "../../components/tags/tags.component";
import ButtonFavorites from "../../components/button-favorites/button-favorites.component";

// @ts-ignore
import TheMovieDbService from "home/TheMovieDbService";
// @ts-ignore
import { Movie } from "home/IMovie";

export default () => {
  const { id } = useParams();

  const theMovieDbService = useMemo(() => new TheMovieDbService(), []);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isFavoriteLoading, setIsFavoriteLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      const response = await theMovieDbService.getMovieDetails(id);
      setMovie(response);
    };

    getMovieDetails();
  }, []);

  useEffect(() => {
    const checkIsFavorite = async () => {
      const response = await theMovieDbService.getFavoriteMovies(movie?.title);
      const isFavoriteMovie = response?.results?.find(
        (movie: Movie) => Number(movie.id) === Number(id)
      );
      setIsFavorite(!!isFavoriteMovie);
      setIsFavoriteLoading(false);
    };

    checkIsFavorite();
  }, []);

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1b0000;
    color: #fff;
    gap: 1rem;
    overflow: scroll;
  `;

  return (
    <Container>
      <img
        src={`${process.env.REACT_APP_THE_MOVIE_DB_IMAGE_URL}${movie?.poster_path}`}
        alt="Movie"
      />
      <div className="details">
        <h1>{movie?.title}</h1>
        <p>{movie?.overview}</p>
        {isFavoriteLoading ? (
          <p>Carregando...</p>
        ) : (
          <ButtonFavorites
            isFavorite={isFavorite}
            onChangeFavorite={(value: boolean) => setIsFavorite(value)}
            movie={movie}
          />
        )}
        <Tags tags={movie?.genres} />
      </div>
    </Container>
  );
};
