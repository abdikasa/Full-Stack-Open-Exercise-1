import React from "react";
import ReactDOM from "react-dom";

// 1.2: course information, step2
// Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead it only renders three Part components of which each renders the name and number of exercises of one part.

const Header = (prop) => (
  <>
    <h1>I am enrolled in the {prop.course} program.</h1>
  </>
);

const Part = (prop) => {
  return (
    <>
      <p>
        {prop.title}: {prop.total}
      </p>
    </>
  );
};

const Content = () => {
  return (
    <>
      <Part title="Fundamentals of React" total="10" />
      <Part title="Using props to pass data" total="7" />
      <Part title="State of a component" total="14" />
    </>
  );
};

const Total = (prop) => {
  const sum = prop.total.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
  return (
    <>
      <p>Total number of credits: {sum}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  return (
    <>
      <Header course={course} />
      <Content />
      <Total total={[10, 7, 14]} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
