import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders My new React App link", () => {
  render(<App />);
  const linkElement = screen.getByText(/My new React App/i);
  expect(linkElement).toBeInTheDocument();
});
