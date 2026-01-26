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

//working with non booleans
//falsy and truthy values
//falsy values: false, 0, "", null, undefined, NaN, ' '
//truthy values: all values except falsy values
let username = "admin";
if(username || age>18){
    console.log("Access granted");
}

//short circuit evaluation
//(false || true || true) - stops at first true and returns true
//(true && false && true) - stops at first false and returns false
let result = "" || 0 || "Hello" || "World";
console.log(result); // Hello 

//Bitwise Operators &, |, ^, ~, <<, >>, >>>
console.log(5 & 3); // 1
console.log(5 | 3); // 7
console.log(5 ^ 3); // 6
console.log(~5); // -6
console.log(5 << 1); // 10
console.log(5 >> 1); // 2
console.log(5 >>> 1); // 2  
//Bitwise operators work on binary representation of numbers
// ~ gives 1's complement
// << left shift (multiplies by 2 ki power n, n is number of shifts)
// >> right shift (divides by 2 ki power n, n is number of shifts)
// >>> zero fill right shift


