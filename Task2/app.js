// const heading = document.createElement("h1");
// heading.innerHTML = "Hello world from JS to manipulate DOM";
// const root = document.getElementById("root");
// root.appendChild(heading);
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "title" }, "Heading 1");

const head = React.createElement(
  "h1",
  { id: "Parent" },
  React.createElement("h2", { id: "child" }, [
    React.createElement("h1", { id: "title" }, "Heading 1"),
    React.createElement("h1", { id: "title" }, "Heading 2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(head);
