import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SearchComponent from "./search.component";
import "@testing-library/jest-dom/extend-expect";

test("should de render correctly", async () => {
  render(<SearchComponent />);
  const searchInput = screen.getByRole("textbox") as HTMLInputElement;
  const searchButton = screen.getByRole("button");
  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();

  fireEvent.change(searchInput, { target: { value: "test" } });
  await waitFor(() => {
    expect(searchInput.value).toBe("test");
  });
});
