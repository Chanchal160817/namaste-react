// nested element
/*
<div id ="parent">
<div id ="child">
<h1>I'm h1 tag</h1>
</div>
</div>
*/

const parent2 = React.createElement(
    "div",
    { id: "parent" },
        React.createElement(
            "div",
            { id: "child" },
            React.createElement("h1", {}, "I'm an h1 tag")
        )
    
)

// sibling of h1:- create array
/*
<div id ="parent">
<div id ="child">
<h1>I'm h1 tag</h1>
<h2>I'm h1 tag</h2>
</div>
</div>
*/
const parent1 = React.createElement(
    "div",
    { id: "parent" },
        React.createElement(
            "div",
            { id: "child" },
            [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h1 tag")]
        )
    
)


/*
<div id ="parent">
<div id ="child">
<h1>I'm h1 tag</h1>
<h2>I'm h1 tag</h2>
</div>
<div id ="child2">
<h1>I'm h1 tag</h1>
<h2>I'm h1 tag</h2>
</div>
</div>
*/


// React element is an object and rthis react object becomes html that the browser understand
const parent = React.createElement(
    "div",
    { id: "parent" },[
        React.createElement(
            "div",
            { id: "child" },
            [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h1 tag")]
        ),
        React.createElement(
            "div",
            { id: "child" },
            [React.createElement("h1", {}, "I'm an h2 tag"), React.createElement("h2", {}, "I'm an h1 tag")]
        )
    ]
    
)
const heading = React.createElement("h1",
    { id: "heading", xyz: "abc" },
    "Hello World from React!")
// {}: use for attributes for tab
// heading create react object
console.log(parent)
// return oject
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
// render method basically converting heading object to an h1 tag 