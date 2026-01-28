//reference types - objects, arrays, functions
//Takes heap memory but needs a reference to access it stored in stack memory

//object-collection of key value pairs
let person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello');
    },
    "full name": "John Doe"//keys can have spaces if in quotes
};
console.log(person);
console.log(typeof person);
let anotherPerson = person; //reference copy- shallow copy new object not created
anotherPerson.age = 35;
console.log(person.age); //35

//shallow copy vs deep copy
//shallow copy- copies reference of nested objects
//deep copy- creates a new object with all new nested objects

//arrays
let numbers = [1, 2, 3, 4, 5];
let arr=['string', 100, true, null, undefined, {key: 'value'}, [1,2,3]];
//array constructors
let moreNumbers = new Array(6, 7, 8, 9, 10);
console.log(typeof numbers);

//built-in array methods
numbers.push(6); //add to end
numbers.pop(); //remove from end
numbers.unshift(0); //add to start
numbers.shift(); //remove from start
console.log(numbers.indexOf(3));
console.log(numbers.includes(4));//true
//slice, splice(insert, replace, remove), map, filter, reduce, sort
let sliced = numbers.slice(1, 4); //creates new array from index 1 to 3
console.log(sliced);
numbers.splice(2, 2, 2.5); //at index 2, remove 2 elements, add 2.5
console.log(numbers);
numbers.splice(4, 0, 4.5); //at index 4, remove 0 elements, add 4.5
console.log(numbers);
//map- creates new array by applying function to each element
let mapped = numbers.map(function(num) {
    return num * 2;
});
console.log(mapped);
let array=[1, 2, 3, 4, 5, 6];
array.map((number, index) => {
    console.log(number);
    console.log(index);
});

//filter- creates new array with elements that pass test
let filtered = numbers.filter(function(num) {
    return num > 3;
});
array.filter((number)   => number >3);
console.log(filtered);
//reduce- reduces array to single value
//accumulator- khud se initialise, if not provided, first element is taken as initial value of array
//current-if accumulator not provided, second element is taken as current value otherwise first element is taken as current value
let nums=[10, 20, 30];
let ans=nums.reduce((acc,curr)=>{
    return acc+curr;//stores sum in accumulator
},0);//0 is initial value of accumulator
console.log(ans); //60
//sort- sorts array
let unsorted = [5, 3, 8, 1, 2];
unsorted.sort(); //sorts in place
console.log(unsorted);
//desending order
unsorted.sort((a, b) => b - a);
console.log(unsorted);
//find- returns first element that satisfies condition
let found = numbers.find(function(num) {
    return num > 4;
});//returns first number greater than 4
console.log(found);



