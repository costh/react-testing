import { screen, render } from "@testing-library/react";
import DummyComponent from "./dummyComponent";
import "@testing-library/jest-dom";

test("Dummy component renders a heading with some text", () => {
  render(<DummyComponent />);

  expect(screen.getByRole("heading")).toHaveTextContent("This is my heading");
});
