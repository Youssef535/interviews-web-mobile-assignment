import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
// We will follow 3 steps to test our component in the future

describe("App", () => {
  it("renders Hello Vite Project", () => {
    // Arrange
    render(<App />);
    // Act
    // Expect
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Hello Vite Project");
  });
});
