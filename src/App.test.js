import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("Adds one", () => {
  // Render App wrapped inside MemoryRouter so react-router-dom works in tests
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Get elements by their test IDs
  const heading = screen.getByTestId("currentNumber");
  const btn = screen.getByTestId("addOne");

  // Simulate a click event on the button
  fireEvent.click(btn);

  // Assert that heading text updates to "2"
  expect(heading).toHaveTextContent("2");
});
