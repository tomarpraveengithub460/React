const heading = React.createElement("h1", {}, "Hello World Using React via CDN");
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(heading);


// Way to create Nested Elements
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "Hello1"), 
        React.createElement("h1", {}, "Hello2")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Hello3"), 
        React.createElement("h1", {}, "Hello4")
    ])
]);
const root = ReactDOM.createRoot(document.getElementsByTagName("body"));
root.render(parent);