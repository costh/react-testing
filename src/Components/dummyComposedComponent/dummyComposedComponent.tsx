import React from "react";
import DummyComponent from "../dummyComponent/dummyComponent";
import DummyComponentWithProps from "../dummyComponentWithProps/dummyComponentWithProps";
import DummyComponentWithState from "../dummyComponentWithState/dummyComponentWithState";

type Props = {
  heading: string;
  count: number;
};

const dummyComposedComponent = ({ heading, count }: Props) => {
  return (
    <div>
      <div>
        <div>
          <DummyComponent />
          <DummyComponentWithProps text={heading} />
          <DummyComponentWithState countDefault={count} />
        </div>
      </div>
    </div>
  );
};

export default dummyComposedComponent;
