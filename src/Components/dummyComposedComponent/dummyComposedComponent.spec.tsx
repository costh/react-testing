import { create } from "react-test-renderer";
import DummyComponent from "../dummyComponent/dummyComponent";
import DummyComponentWithProps from "../dummyComponentWithProps/dummyComponentWithProps";
import DummyComposedComponent from "./dummyComposedComponent";

const TestText = "Interesting Heading";

describe("Renders the dummy component with provided props", () => {
  it("passes in correct props and renders h1 with provided text and with the right class", () => {
    const result = create(<DummyComposedComponent heading={TestText} />).root;

    expect(result.props).toEqual({ heading: TestText });
    expect(result.findAllByType(DummyComponent)).toBeTruthy();
    expect(result.findAllByType(DummyComponentWithProps)).toBeTruthy();

    expect(result.findByType(DummyComponentWithProps).props).toEqual({
      text: TestText,
    });
  });
});
