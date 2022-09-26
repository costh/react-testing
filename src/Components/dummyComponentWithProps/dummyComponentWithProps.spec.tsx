import { create } from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import DummyComponentWithProps from "./dummyComponentWithProps";

const TestText = "Apples";

describe("Renders the dummy component with provided props", () => {
  it("passes in correct props and renders h1 with provided text and with the right class", () => {
    const result = create(<DummyComponentWithProps text={TestText} />).root;

    expect(result.props).toEqual({ text: TestText });
    expect(result.findByType("h1")).toBeTruthy();
    expect(result.findByType(DummyComponentWithProps).props).toEqual({
      text: "Apples",
    });
  });
});
