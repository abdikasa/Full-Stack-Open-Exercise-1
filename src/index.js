import React, { useState } from "react";
import ReactDOM from "react-dom";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        <p>No buttons have been pressed!</p>
      </div>
    );
  }
  return (
    <div>
      <p>Here's the history of clicks: {props.allClicks.join(" ")}</p>
    </div>
  );
};

const Button = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
);

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
        <Button label="Left" onClick={handleLeft} />
        {right}
        <Button label="Right" onClick={handleRight} />
        <History allClicks={allClicks} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
