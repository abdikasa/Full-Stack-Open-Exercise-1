import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeft = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRight = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeft}>Left</button>
        {right}
        <button onClick={handleRight}>Left</button>
        <p>{allClicks.join(" ")}</p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
