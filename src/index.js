import React from "react";
import ReactDOM from "react-dom";

// 1.4: course information step4
// And then place the objects into an array. Modify the variable definitions of App into the following form and modify the other parts of the application accordingly:

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {parts[0].name}: {parts[0].exercises}
      </p>
      <p>
        {parts[1].name}: {parts[1].exercises}
      </p>
      <p>
        {parts[2].name}: {parts[2].exercises}
      </p>
      <p>
        Total number of exercises:
        {parts.reduce((acc, curr) => {
          return (acc += curr.exercises);
        }, 0)}
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
