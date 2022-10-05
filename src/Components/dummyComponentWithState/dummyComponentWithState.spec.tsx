import { act, create } from "react-test-renderer";
import { countDefaultMock } from "../../TestUtilities/Mocks/React-accordion-example/countDefault";
import DummyComponentWithState from "./dummyComponentWithState";

describe("DummyComponentWithState unit test suite", () => {
  it("passes in correct props and renders a span that contains the provided state with some text and also updates text when button is clicked", async () => {
    const component = create(
      <DummyComponentWithState countDefault={countDefaultMock} />
    );

    const instance = component.root;

    expect(instance.findByType("span").children).toEqual([
      "The counter is now at: ",
      `${countDefaultMock}`,
    ]);

    act(() => {
      instance.findByType("button").props.onClick();
      instance.findByType("button").props.onClick();
    });

    expect(instance.findByType("span").children).toEqual([
      "The counter is now at: ",
      `${countDefaultMock + 2}`,
    ]);
  });
});
