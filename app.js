const heading = React.createElement("div", 
    {id:"Parent"}, 
    React.createElement("div", {id:"Child"},[
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag")])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);