//Temporal Dead Zone (TDZ)
//TDZ starts below
console.log(marks);
console.log("Aditee");
console.log("Jha");
const marks=100;
//TDZ ends above
//We can't access value of marks in TDZ
console.log(marks);

//use more of let and const to avoid issues with TDZ and hoisting, increases predictability of code behavior
