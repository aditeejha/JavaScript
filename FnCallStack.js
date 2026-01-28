//stack- function calls, primitive types
//lifo- last in first out
//functions-first class citizens- can be assigned to variables, passed as arguments, returned from other functions
//can be used as properties of objects and elements of arrays

//variable assigning
let greet=function(){
    console.log("Hello!");
}
greet();

//passing function as argument to another function
function greetMe(greet, name){
    greet();
    console.log(name);
}
greetMe(greet, "Aditee");

//returning function from another function
function solve(num){
    return function(num){
        return num*num;
    }
}
let ans=solve(5);
let finalAns=ans(10);
console.log(finalAns); //100

//storing function in DS
const arr={
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
}
let first=arr[0];
let answer=first(5,10);
console.log(answer); //15

//funtions as property of object
let obj={
    age:25,
    wt:36,
    ht:180,
    greet: ()=>{
        console.log("Hello there!");
    }
}
console.log(obj.age); //25
obj.greet(); //Hello there!

