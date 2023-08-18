import React from "react";
import ReactDOM from "react-dom/client";

//React elements
const jsxHeader = (
  <h1
    id="heading"
    tabIndex="5">
    Hello from JSX react elements
  </h1>
);

//React component
const JsxHeading = () => <h1 id="heading">Hello from JSX react component</h1>;

//React functional component
const HeaderComponent = () => (
  <div id="container">
    {jsxHeader}
    <JsxHeading />
    <h1 id="heading">Hello from header component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<JsxHeading />);
root.render(<HeaderComponent />);
