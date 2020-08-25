import React from "react";
import ReactDOM from "react-dom";

// 1.4 Extra: course information step4
// And then place the objects into an array. Modify the variable definitions of App into the following form and modify the other parts of the application accordingly:

const Header = (prop) => {
  return <h1>{prop.title}</h1>;
};
const Content = (prop) => {
  return (
    <>
      <p>
        {prop.parts[0].name} : {prop.parts[0].exercises}
      </p>
      <p>
        {prop.parts[1].name} : {prop.parts[1].exercises}
      </p>
      <p>
        {prop.parts[2].name} : {prop.parts[2].exercises}
      </p>
    </>
  );
};

const Total = (prop) => {
  return (
    <>
      <p>
        Total number of exercises:{" "}
        {prop.parts.reduce((a, b) => {
          return (a += b.exercises);
        }, 0)}
      </p>
    </>
  );
};

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
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
