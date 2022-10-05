import { create } from "react-test-renderer";
import DummyComponent from "../dummyComponent/dummyComponent";
import DummyComponentWithProps from "../dummyComponentWithProps/dummyComponentWithProps";
import DummyComponentWithState from "../dummyComponentWithState/dummyComponentWithState";
import DummyComposedComponent, {
  dummyComponentProps,
} from "./dummyComposedComponent";

const dummyComponentMockProps: dummyComponentProps = {
  heading: "Interesting heading",
  count: 15,
  color: "blue",
};

const result = create(
  <DummyComposedComponent {...dummyComponentMockProps} />
).root;

describe("Dummy component unit test suite", () => {
  it("contains the components required for this component to function", () => {
    expect(result.findByType(DummyComponent)).toBeTruthy();
    expect(result.findByType(DummyComponentWithProps)).toBeTruthy();
    expect(result.findByType(DummyComponentWithState)).toBeTruthy();
  });

  it("passes in correct props to dummyComponentWithProps", () => {
    expect(result.findByType(DummyComponentWithProps).props).toHaveProperty(
      "text",
      dummyComponentMockProps.heading
    );

    expect(result.findByType(DummyComponentWithProps).props).toHaveProperty(
      "color",
      dummyComponentMockProps.color
    );
  });

  it("passes in correct props to DummyComponentWithState", () => {
    expect(result.findByType(DummyComponentWithState).props).toHaveProperty(
      "countDefault",
      dummyComponentMockProps.count
    );
  });
});
