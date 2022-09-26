import React from "react";
import DummyComponent from "../dummyComponent/dummyComponent";
import DummyComponentWithProps from "../dummyComponentWithProps/dummyComponentWithProps";

type Props = {
  heading: string;
};

const dummyComposedComponent = ({ heading }: Props) => {
  return (
    <div>
      <DummyComponent />
      <DummyComponentWithProps text={heading} />
    </div>
  );
};

export default dummyComposedComponent;
