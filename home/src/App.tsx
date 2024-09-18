import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home.page";
import MoviesProvider from "./contexts/movies/movies-provider";

import "./index.scss";

const App = () => (
  <MoviesProvider>
    <HomePage />
  </MoviesProvider>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
