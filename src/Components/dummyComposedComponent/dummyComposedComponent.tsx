import React from "react";
import DummyComponent from "../dummyComponent/dummyComponent";
import DummyComponentWithProps from "../dummyComponentWithProps/dummyComponentWithProps";
import DummyComponentWithState from "../dummyComponentWithState/dummyComponentWithState";

export type dummyComponentProps = {
  heading: string;
  count: number;
  color: string;
};

const dummyComposedComponent = ({ heading, count, color }: dummyComponentProps) => {
  return (
    <div>
      <div>
        <div>
          <DummyComponent />
          <DummyComponentWithProps text={heading} color={color} />
          <DummyComponentWithState countDefault={count} />
        </div>
      </div>
    </div>
  );
};

export default dummyComposedComponent;
