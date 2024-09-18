// @ts-ignore
import TheMovieDbService from "home/TheMovieDbService";
// @ts-ignore
import { Movie } from "home/IMovie";
import React, { useMemo } from "react";
import styled from "styled-components";

interface Props {
  movie: Movie;
  isFavorite: boolean;
  onChangeFavorite: (value: boolean) => void;
}

export default ({ movie, isFavorite, onChangeFavorite }: Props) => {
  const theMovieDbService = useMemo(() => new TheMovieDbService(), []);

  const AddToFavoritesButton = styled.button`
    background-color: #fff;
    color: #000;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  `;

  const RemoveFromFavoritesButton = styled.button`
    background-color: #980000;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  `;

  const removeFromFavorites = async (e: any) => {
    e.preventDefault();

    await theMovieDbService.removeFromFavorites(movie?.id);
    onChangeFavorite(false);
  };

  const addToFavorites = async (e: any) => {
    e.preventDefault();

    await theMovieDbService.addToFavorites(movie?.id);
    onChangeFavorite(true);
  };

  if (isFavorite) {
    return (
      <RemoveFromFavoritesButton onClick={removeFromFavorites}>
        Remover dos favoritos
      </RemoveFromFavoritesButton>
    );
  }

  return (
    <AddToFavoritesButton onClick={addToFavorites}>
      Adicionar aos favoritos
    </AddToFavoritesButton>
  );
};
