//operators
// Arithmetic Operators +, -, *, /, %
// Assignment Operators =, +=, -=, *=, /=, %=
// Comparison Operators ==, ===, !=, !==, >, <, >=, <=
// Logical Operators &&, ||, !

// unary operator
// ++, --

let a = 10;
let b = "10";
if(a==b){ // loose equality operator - checks value only
    console.log("a and b are equal");
}
if(a===b){ // strict equality operator - checks value and data type
    console.log("a and b are strictly equal");
}
if(a!==b){ // strict not equal operator - checks value and data type
    console.log("a and b are not strictly equal");
}
let c = 5;
let d = 15;
if(c!=d){ // loose not equal operator - checks value only
    console.log("c and d are not equal");
}
console.log(d>c);

//ternary operator - condition ? expr1(true) : expr2(false)
let age=20;
let canVote = (age>=18) ? "Yes, can vote" : "No, cannot vote";
console.log(canVote);

//Logical operators- used to merge multiple conditions or statements
// && (AND), || (OR), ! (NOT)
let marks=85;
if(marks>75 && age>=18){
    console.log("Eligible for scholarship");
}