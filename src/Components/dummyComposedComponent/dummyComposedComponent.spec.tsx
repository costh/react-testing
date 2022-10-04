import { create } from "react-test-renderer";
import DummyComponent from "../dummyComponent/dummyComponent";
import DummyComponentWithProps from "../dummyComponentWithProps/dummyComponentWithProps";
import DummyComponentWithState from "../dummyComponentWithState/dummyComponentWithState";
import DummyComposedComponent from "./dummyComposedComponent";

const TestText = "Interesting Heading";
const testNumber = 99;

describe("Renders the dummy component with provided props", () => {
  it("passes in correct props + children recieves correct props", () => {
    const result = create(
      <DummyComposedComponent heading={TestText} count={testNumber} />
    ).root;

    expect(result.props).toEqual({ heading: TestText, count: testNumber });

    expect(result.findAllByType(DummyComponent)).toBeTruthy();
    expect(result.findAllByType(DummyComponentWithProps)).toBeTruthy();
    expect(result.findAllByType(DummyComponentWithState)).toBeTruthy();

    expect(result.findByType(DummyComponentWithProps).props).toEqual({
      text: TestText,
    });
    expect(result.findByType(DummyComponentWithState).props).toEqual({
      countDefault: testNumber,
    });
  });
});
