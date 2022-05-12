import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";
import URLShortener from "./URLShortener";

const server = setupServer(
  rest.get(`https://api.shrtco.de/v2/shorten`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        result: {
          full_short_link: "http://asklf.ld",
          original_link: "http://google.com",
        },
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());

test("displays the URLConverted with the response of the api call", async () => {
  render(<URLShortener />);

  const button = screen.getByRole("button", { name: "Shorten It!" });

  fireEvent.click(button);

  const url = await screen.findByText("http://google.com");
  expect(url).toBeInTheDocument();
});
