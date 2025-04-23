import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1",
//     {
//         id: "heading ",xyz : "abc"
       
//     }
// ,"Hello World from React!")

// console.log(heading) //Object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
/**
 * 
 * 
 * <div id = "parent ">
 *       <div id = "child">
 * 
 *          <h1>I m H1 tag<h1>
 *          <h1>I m H2 tag<h2>
 *       </div>
 *  <div id = "child2">
 * 
 *          <h1>I m H1 tag<h1>
 *          <h1>I m H2 tag<h2>
 *       </div>
 * </div>
 * 
 */
const parent = React.createElement("div",
   
    {id:"parent"},

   [ React.createElement(
    "div",
    {id:"child"},

[React.createElement("h1",
    {},
"This is NamasteReact🚀"), React.createElement("h2",
    {},
"I will fucking do it in 15 days")]

), React.createElement(
    "div",
    {id:"child2"},

[React.createElement("h1",
    {},
"I m H1 tag"), React.createElement("h2",
    {},
"I m H2 tag")]

)]
);
// This is core react ,but due to clumsy of code  facebook introduced 
// JSX 
//JSX (transpiling before it reaches the JS)-PARCEL -Babel

//JSX => React.createElement =>ReactElement - JS Object => HTML Element
//Babel is converting/transpiling JSX in to react.createElement 
const jsxHeading = <h1 id = "heading ">NamasteReact🚀 using Jsx</h1>

//jsx is not HTML in javaScript , Jsx is different it is HTML or XML like 
//syntax.
// console.log(heading)
console.log(jsxHeading)

// console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));

//React Component
//Class Based Component - OLD
//Functional Component - NEW :- function which return some piece of JSX code which is transpiled into react.create using babel which runs on javascript engine

//React functional component

const number = 1000;

const HeadingComponent = ()=>(
 <div className="header">
    <h2>{number+200}</h2> 
<h1 className= "header">Hello from Functional component🚀</h1>
</div>
);
console.log(HeadingComponent)
root.render(parent)
root.render(jsxHeading)
root.render(<HeadingComponent />)

//Component composition :- Putting one functional component in another functional component
//(Line 84) In JSX any where you write {} YOu can write any javascript code inside this curly braces