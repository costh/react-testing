import React from "react";

import "./App.css";
import ReactAccordionExample from "./Components/react-accordion-example/react-accordion-example";
import { accordionContentArrayMock } from "./TestUtilities/Mocks/React-accordion-example/accordionContentMock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <DummyComponent></DummyComponent>
      <DummyComponentWithProps text={"heading"} />
      <DummyComponentWithState count={5}> */}
      {/* <ReactAccordionExample accordionContent={accordionContentArrayMock} /> */}
    </div>
  );
}

export default App;
