import { createContext } from "react";
import { MovieContext } from "../../interfaces/movies.interface";
const MoviesContext = createContext<MovieContext>({});
export default MoviesContext;
