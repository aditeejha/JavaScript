//hoisting- var declarations are hoisted to the top of their scope
//using var keyword
//functions also

sayMyName("Aditee"); //works due to hoisting
function sayMyName(name) {
    console.log("My name is " + name);
}
sayMyName("John");
//shifted as var age;
var age = 25; //declaration is hoisted, initialization is not
console.log(age); //undefined

//using let and const- not hoisted
//console.log(city); //ReferenceError
let city = "New York";
console.log(city);

//using function as expression- not hoisted
//sayHello("Alice"); //TypeError reference error
const sayHello = function(name) {
    console.log("Hello " + name);
} 

//class declarations- not hoisted

const object1= new Human();//ReferenceError
class Human{

}
const object1= new Human();

var greet;
console.log(greet); //undefined
var greet=function(){
    console.log("Hello!");
}


