//primitive data types
let name = "Bitd"; //string
let age = 25; //number
let isStudent = true; //boolean
let address; //undefined
let phone = null; //null    
let id = Symbol("id"); //symbol
BigInt("9007199254741991"); //bigint -2^53 -1 to 2^53 -1
console.log(address);

console.log(typeof(name)); //typeof operator to check data type

//symbol data type is unique and immutable
let sym1 = Symbol("hello");
let sym2 = Symbol("hello");
console.log(sym1 === sym2); //false 

