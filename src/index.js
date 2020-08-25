import React from "react";
import ReactDOM from "react-dom";

// 1.1: course information, step1
// Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.

const Header = (prop) => (
  <>
    <h1>I am enrolled in the {prop.course} program.</h1>
  </>
);

const Content = () => {
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";
  const total = [10, 7, 14];
  return (
    <>
      <p>
        {part1}: {total[0]}
      </p>
      <p>
        {part2}: {total[1]}
      </p>
      <p>
        {part3}: {total[2]}
      </p>
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
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header course={course} />
      <Content />
      <Total total={[10, 7, 14]} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
