import React, { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const changeCounter = (e) => {
    if (e.target.value === "+") setCounter((prev) => prev + 1);
    else setCounter((prev) => prev - 1);
  };

  return (
    <div>
      <button value="-" onClick={changeCounter}>
        -
      </button>
      <span>{counter}</span>
      <button value="+" onClick={changeCounter}>
        +
      </button>
    </div>
  );
}
