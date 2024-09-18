import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useMemo,
  useState,
} from "react";

import {
  FormContainer,
  SearchButton,
  SearchInput,
} from "./search.component.styles";
import TheMovieDbService from "../../services/the-movie-db.service";

export default () => {
  const theMovieDbService = useMemo(() => new TheMovieDbService(), []);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const searchResults = await theMovieDbService.searchMovie(search);
      setSearchResults(searchResults);
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
