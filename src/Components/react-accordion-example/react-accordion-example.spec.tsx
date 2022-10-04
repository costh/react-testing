import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { create, TestRendererOptions } from "react-test-renderer";
import { accordionContentArrayMock } from "../../TestUtilities/Mocks/React-accordion-example/accordionContentMock";
import ReactAccordionExample from "./react-accordion-example";

const reactAccordionMock: TestRendererOptions = {
  createNodeMock: (element) => {
    if (element.type === "div") {
      // mock node interface
      return {
        getAttribute: (name: any) => {
          if (name === "data-accordion-component") {
            return "AccordionItemButton";
          }
        },
        childElementCount: 1,
        firstElementChild: {
          getAttribute: () => "AccordionItemButton",
        },
      };
    }
    return null;
  },
};

describe("Accordion component unit test suite", () => {
  it("doesn't render the Accordion component if empty array is passed in", () => {
    const result = create(<ReactAccordionExample accordionContent={[]} />).root;
    expect(result.findAllByType(Accordion)).toEqual([]);
  });

  it("renders the Accordion component with the required sub components if an array is passed in", async () => {
    let tree = create(
      <ReactAccordionExample accordionContent={accordionContentArrayMock} />,
      reactAccordionMock
    ).root;
    expect(tree.findByType(Accordion)).toBeTruthy();

    expect(tree.findAllByType(AccordionItem).length).toBe(
      accordionContentArrayMock.length
    );

    tree.findAllByType(AccordionItem).forEach((child, index) => {
      expect(child.findAllByType(AccordionItemHeading).length).toBe(1);
      expect(child.findAllByType(AccordionItemPanel).length).toBe(1);
      expect(child.findAllByType(AccordionItemButton).length).toBe(1);
      expect(child.findByType(AccordionItemButton).props.children).toEqual(
        accordionContentArrayMock[index].heading
      );
      expect(child.findByType("p").props.children).toEqual(
        accordionContentArrayMock[index].text
      );
    });
  });
});
