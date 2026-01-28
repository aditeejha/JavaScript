//Variable Scoping
//global scope-var,let,const
//function scope-var,let,const
//block scope-let,const

var age=5; //global scope... causes more errors though
console.log(age); //5
const Myage=10;

//function scope
function greet(){
    var name="Thea"; 
    console.log("Hello "+name);   
}
greet();
console.log(name); //ReferenceError

//block scope
console.log(height); //ReferenceError
{
    var height=180;
}
console.log(height); //180





