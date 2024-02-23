//this is an anonymous function which mean that there's no name and we cannot call it else where

// document.addEventListener("click", function () {
//   console.log("Hello World");
// });

//arrow function
// document.addEventListener("click", () => console.log("arrow function"));
//if there's 1 parameter only we dont need to put parenthesis

let myNumbers = [10, 20, 30];
let doubleNumbers = myNumbers.map((num) => num * 2);

console.log(doubleNumbers);

//function hoisting
//function can be called anywhere
//but if we create an arrow function it can't be called
// we can only call it when we call it below the variable that we create
//because it execute from top to bottom

let cool = () => {
  console.log("cool");
};

cool();


//template literal
