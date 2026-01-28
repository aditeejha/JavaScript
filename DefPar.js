//Default Parameters- allows to use function with default values
//incase function needs value and we forgot to pass, then we can use default values

function sayName(myName){
    console.log("My name is: ", myName);
}

sayName(); //undefined

function sayMyName(myName="Aditee"){
    console.log("My name is: ", myName);
}

sayMyName(); //Aditee


function sayFullName(fname="Ria",lname="Tomar"){
    console.log("My name is: ", fname+" "+lname);
}

sayFullName("Aditee","Jha");

function SayFullName(fname="Ria",lname=fname.toUpperCase()){
    console.log("My name is: ", fname+" "+lname);
}

SayFullName("Aditee");

//setting object as default parameter
function solve(value={age:15, wt:90; ht:190}){
    console.log("Hello Ji", value);
}
solve();

//can also pass array as default parameter

function Solve(value="Rida"){
    console.log("Hello Ji", value);
}
Solve(null); //Hello Ji null
Solve(undefined); //Hello Ji Rida


//passig function as default parameter
function getAge(){
    return 190;
}

function utility(name="Aditee", age=getAge()){
    console.log("Name is: ", name);
    console.log("Age is: ", age);
}

utility();//Aditee, 190



