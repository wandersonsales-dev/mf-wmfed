import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import {
  FormContainer,
  SearchButton,
  SearchInput,
} from "./search.component.styles";
import TheMovieDbService from "../../services/the-movie-db.service";
import MoviesContext from "../../contexts/movies/movies-context";

export default () => {
  const { setMovieList } = useContext(MoviesContext);
  const theMovieDbService = useMemo(() => new TheMovieDbService(), []);

  const [search, setSearch] = useState("");

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const searchResults = await theMovieDbService.searchMovie(search);

      setMovieList(searchResults?.results);
    },
    [search]
  );

  return (
    <FormContainer onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
      <SearchButton type="submit">Search</SearchButton>
    </FormContainer>
  );
};
