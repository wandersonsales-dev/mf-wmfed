import React from "react";
import ReactDOM from "react-dom/client";
import DetailsPage from "./pages/details/details.page";

import "./index.css";

const App = () => <DetailsPage />;
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
