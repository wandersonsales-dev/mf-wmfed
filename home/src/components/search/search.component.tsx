import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useMemo,
} from "react";

import {
  FormContainer,
  SearchButton,
  SearchInput,
} from "./search.component.styles";
import TheMovieDbService from "../../services/the-movie-db.service";
import MoviesContext from "../../contexts/movies/movies-context";

export default () => {
  const { setMovieList, search, setSearch } = useContext(MoviesContext);
  const theMovieDbService = useMemo(() => new TheMovieDbService(), []);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (setSearch) {
      setSearch(event.target.value);
    }
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const searchResults = await theMovieDbService.searchMovie({
        query: search ?? "",
      });
      if (setMovieList) {
        setMovieList(searchResults);
      }
    },
    [search]
  );

  return (
    <FormContainer onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Buscar..."
        onChange={handleChange}
      />
      <SearchButton type="submit">Buscar</SearchButton>
    </FormContainer>
  );
};
