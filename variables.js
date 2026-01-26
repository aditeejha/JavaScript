let age=25; // let is block scoped
// redefinition not allowed with let
age=30; // re assignment allowed
console.log("Age is:",age);

var num=65; // var is function and globally scoped, but not block scoped
if(true){
    console.log("Number is:",num);
}
var num=75;
// var can be re decalared or re assigned, which creates issue in debugging
age="Thirty Five"; // dynamic typing in JS

const a=25; // const is block scoped and cannot be re assigned or re declared
//a=20; // will throw error


var x=10;
var x=20; // re declaration allowed
x=30; // re assignment allowed

let y=15;
y=25; // re assignment allowed
let y=0; // will throw error

const z=50;
z=60; // will throw error   
const z=70; // will throw error


//Naming conventions
// variable names cannot start with numbers or special characters except _ and $
// variable names cannot have spaces
// variable names are case sensitive
// variable names cannot be JS reserved keywords
// camelCase is preferred convention for naming variables in JS
