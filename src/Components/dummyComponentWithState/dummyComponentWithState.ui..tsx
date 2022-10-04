import { screen, render, prettyDOM } from "@testing-library/react";

import "@testing-library/jest-dom";
import { act } from "react-test-renderer";
import DummyComponentWithState from "./dummyComponentWithState";
import { countDefaultMock } from "../../TestUtilities/Mocks/React-accordion-example/countDefault";

describe("Accordion component interactivity suite", () => {
  it("Should have buttons available on the page and the text content is not visible until the button is interacted with", () => {
    render(<DummyComponentWithState countDefault={countDefaultMock} />);

    const buttonEl = screen.getByRole("button", {
      name: "Add +1",
    });
    expect(buttonEl).toBeInTheDocument();
    expect(
      screen.getByText(`The counter is now at: ${countDefaultMock}`)
    ).toBeInTheDocument();

    act(() => {
      buttonEl.click();
    });

    expect(
      screen.getByText(`The counter is now at: ${countDefaultMock + 1}`)
    ).toBeInTheDocument();
  });
});
