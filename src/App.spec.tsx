import App from "./App";
import ShallowRenderer from "react-test-renderer/shallow";

it("CheckboxWithLabel changes the text after click", () => {
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();

  expect(result.props.children).toEqual(
    <header className="App-header">
      <img alt="logo" className="App-logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        rel="noopener noreferrer"
        target="_blank"
      >
        Learn React
      </a>
    </header>
  );
});
