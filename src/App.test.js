import { render, screen } from "@testing-library/react";
import App from "./App";
import { act } from "react";

test("renders My new React App link", () => {
  act(() => {
    render(<App />);
  });
  //render(<App />);
  const linkElement = screen.getByText(/My new React App/i);
  expect(linkElement).toBeInTheDocument();
});
