import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

type Props = {
  accordionContent: Array<{
    heading: string;
    text: string;
  }>;
};

const ReactAccordionExample = ({ accordionContent }: Props) => {
  return (
    <>
      {accordionContent.length > 0 && (
        <Accordion>
          {accordionContent.length &&
            accordionContent.map((item, index) => (
              <AccordionItem key={index}>
                <AccordionItemHeading>
                  <AccordionItemButton>{item.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>{item.text}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
        </Accordion>
      )}
    </>
  );
};

export default ReactAccordionExample;
