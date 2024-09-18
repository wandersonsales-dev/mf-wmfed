import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Tag from "../../components/tag/tag.component";
import Tags from "../../components/tags/tags.component";

// @ts-ignore
import TheMovieDbService from "home/TheMovieDbService";

export default () => {
  const { id } = useParams();

  const theMovieDbService = useMemo(() => new TheMovieDbService(), []);
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const response = await theMovieDbService.getMovieDetails(id);
      setMovie(response);
    };

    getMovieDetails();
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
        <Tags tags={movie?.genres} />
      </div>
    </Container>
  );
};
