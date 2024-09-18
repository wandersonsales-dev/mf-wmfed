import React, { PropsWithChildren } from "react";
import MoviesContext from "./movies-context";

interface Props extends PropsWithChildren {}

export default ({ children }: Props) => {
  const value = {};
  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};
