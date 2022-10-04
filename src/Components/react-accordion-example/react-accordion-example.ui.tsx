import { screen, render } from "@testing-library/react";

import "@testing-library/jest-dom";
import ReactAccordionExample from "./react-accordion-example";
import { accordionContentArrayMock } from "../../TestUtilities/Mocks/React-accordion-example/accordionContentMock";
import { act } from "react-test-renderer";

describe("Accordion component interactivity suite", () => {
  it("Should have buttons available on the page and the text content is not visible until the button is interacted with", () => {
    render(
      <ReactAccordionExample accordionContent={accordionContentArrayMock} />
    );

    accordionContentArrayMock.forEach((accordionItem) => {
      const buttonEl = screen.getByRole("button", {
        name: accordionItem.heading,
      });
      expect(buttonEl).toBeInTheDocument();
      expect(screen.getByText(accordionItem.text)).toBeInTheDocument();
      expect(screen.getByText(accordionItem.text)).not.toBeVisible();
      act(() => {
        buttonEl.click();
      });
      expect(screen.getByText(accordionItem.text)).toBeVisible();
    });
  });
});
