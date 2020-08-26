import React, { useState } from "react";
import ReactDOM from "react-dom";

const Display = (prop) => {
  return <div>{prop.counter}</div>;
};

const Button = (prop) => {
  return <button onClick={prop.click}>{prop.text}</button>;
};

const App = () => {
  //start at 0, use deconstruction
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const reset = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button click={increment} text="Increment"></Button>
      <Button click={reset} text="Reset"></Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
