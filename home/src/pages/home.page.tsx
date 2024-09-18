import React from "react";
import styled from "styled-components";
import SearchComponent from "../components/search/search.component";

export default () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1b0000;
    color: #fff;
  `;

  return (
    <Container>
      <SearchComponent />
    </Container>
  );
};
