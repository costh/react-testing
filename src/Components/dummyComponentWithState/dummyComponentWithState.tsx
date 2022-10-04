import React, { useState } from "react";

type props = {
  countDefault: number;
};

export default function DummyComponentWithState({ countDefault = 0 }: props) {
  const [counter, setCounter] = useState(countDefault);

  return (
    <div>
      <span>The counter is now at: {counter}</span>
      <button onClick={() => setCounter((prev) => prev + 1)}> Add +1</button>
    </div>
  );
}
