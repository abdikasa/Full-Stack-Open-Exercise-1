import React from "react";
import ReactDOM from "react-dom";

// 1.5: course information step5
// Let's take the changes one step further. Change the course and its parts into a single JavaScript object. Fix everything that breaks.

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  return (
    <div>
      <h1>{course.name}</h1>
      <p>
        {course.parts[0].name} : {course.parts[0].exercises}
      </p>
      <p>
        {course.parts[1].name} : {course.parts[1].exercises}
      </p>
      <p>
        {course.parts[2].name} : {course.parts[2].exercises}
      </p>
      <p>
        Total exercises :{" "}
        {course.parts.reduce((a, b) => {
          return (a += b.exercises);
        }, 0)}
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
