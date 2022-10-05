import { create } from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import DummyComponent from "./dummyComponent";

describe("Dummycomponent unit test suite", () => {
  it("Dummy component renders", () => {
    // Render a checkbox with label in the document
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<DummyComponent />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe("div");
    expect(result.props.className).toBe("dummyComp1Class");
    expect(result.props.children).toEqual(<h1>This is my heading</h1>);
  });

  it("Dummy component renders using create", () => {
    // Render a checkbox with label in the document

    const root = create(<DummyComponent />).root;
    expect(root.findAllByType("h1")).toBeTruthy();
  });
});
