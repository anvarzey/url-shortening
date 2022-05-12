import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import URLConverted from "./URLConverted";

test("renders when receives a url and its shortened variant", () => {
  render(
    <URLConverted
      original={"http://google.com"}
      shortened={"http://asklf.ld"}
    />
  );

  screen.getByText("Copy");
});

test("delete the entire node from the list", () => {
  render(
    <URLConverted
      original={"http://google.com"}
      shortened={"http://asklf.ld"}
    />
  );

  const deleteBtn = screen.getByRole("button", { name: /x/i });
  fireEvent.click(deleteBtn);
  expect(deleteBtn).not.toBeInTheDocument();
});
