import { Dispatch, SetStateAction } from "react";

export interface MovieContext {
  movieList: MovieList;
  setMovieList: Dispatch<SetStateAction<any[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export interface MovieList {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  adult: boolean;
  video: boolean;
  original_name: string;
  name: string;
  first_air_date: string;
  origin_country: string[];
  media_type: string;
  known_for: Movie[];
  known_for_department: string;
  profile_path: string;
}
