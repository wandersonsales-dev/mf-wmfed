import React from "react";
import styled from "styled-components";
import Search from "../components/search/search.component";
import MovieList from "../components/movie-list/movie-list.component";

export default () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
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
      <Search />
      <MovieList />
    </Container>
  );
};
