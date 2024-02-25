import React from "react";
import ReactDOM from "react-dom/client";

// React Element using react

// const heading = React.createElement("h1",
//     {id:"heading"},
//     "I am heading using React"
//);

// React Element using JSX
// JSX is syntax which is html-like syantax not HTML(remeber)
// JSX code => React.createElement() => ReactElement-JS object => HtmlElemet(render)
const heading = (
  <h1 id="heading" className="head">
    I am heading using JSX
  </h1>
);

// React functional component
// since its one line we can also write it as
// const HeadingComponent = () => <h1>This is react Functional Component</h1>;
// const HeadingComponent1 = () => (
//   <h1 className="Heading">This is react Functional Component</h1>
// );

const Title = () => (
  <h1 id="title" className="titleClass">
    I am heading using JSX
  </h1>
);

const number = 10000;

// Component composition
// we can write or run any javaScript code inside JSX using {} like we did for number
// similalry we can insert normal JSX/react element inside component using {}

const element = (
  <h1 id="element" className="elementClass">
    I am JSX/React Element
  </h1>
);
const HeadingComponent = () => {
  return (
    <div id="container">
      {number}
      <h2>{number * number}</h2>
      {element}
      <Title />
      <Title></Title>
      {Title()}
      <h1 className="heading">This is react Functional Component</h1>
    </div>
  );
};

// since its one line we can also write it as
// const HeadingComponent = () => <h1>This is react Functional Component</h1>;
// or we use normal function too
// const HeadingComponent1 = function () {
//   return (
//     <div id="container">
//       <Title />
//       <h1 className="heading">This is react Functional Component</h1>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
