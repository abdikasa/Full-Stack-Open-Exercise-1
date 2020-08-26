import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  //start at 0, use deconstruction
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const reset = () => setCounter(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increment}>plus</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
