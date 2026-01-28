//for each loop- performs operationon each item in an array
let arr=[10,20,30];
arr.forEach(function(element, index){
    console.log("Element at index "+index+" is "+element);
});

//for in loop- iterates over enumerable properties of an object
let person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};  
for (let key in person) {
    console.log(key + ": " + person[key]);
}

//for of loop- iterates over iterable objects like arrays, strings, maps, sets
let colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}

let fullName = "Bob Smith";
for (let char of fullName) {
    console.log(char);
}


//passing arrays to functions
let array=[10,20,30,40,50];
function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(getSum(array)); 