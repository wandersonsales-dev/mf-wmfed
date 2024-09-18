import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home.page";
import MoviesProvider from "./contexts/movies/movies-provider";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// @ts-ignore
import DetailsPage from "details/DetailsPage";

import "./index.scss";

const App = () => (
  <MoviesProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  </MoviesProvider>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
