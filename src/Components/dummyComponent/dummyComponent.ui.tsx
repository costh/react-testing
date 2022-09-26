import { screen, render } from "@testing-library/react";
import DummyComponent from "./dummyComponent";
import "@testing-library/jest-dom";

test("uses jest-dom", () => {
  render(<DummyComponent />);

  expect(screen.getByRole("heading")).toHaveTextContent("This is my heading");
});
