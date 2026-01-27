//syntax
function add(a, b) {
    return a + b;
}
add(2, 3); // 5

function sayMyName() {
    console.log("My name is John");
}   
sayMyName(); // My name is John

function getSum(a,b,c){
    let sum = a + b + c;
    return sum;
    //unreachable code example
    console.log("This will not be executed");
    let x = 10;
}

let result = getSum(1,2,3);
console.log(result); // 6

function greet(name) {
    return `Hello, ${name}!`;
}   
console.log(greet("Alice")); // Hello, Alice!

let solve=function(x){
    return x * x;
}
console.log(solve(4)); // 16

function getExp(x,y){
    return x ** y;
}

