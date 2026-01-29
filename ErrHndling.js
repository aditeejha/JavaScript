//Error Handling
//Error- any event that disrupts normal flow of execution
//Types- Compile time(code execute hone ke pehle pata chal jata at parse time) and Run time(while the code is executing)
//complie time
//console.log(1;

//run time 
console.log(x); //reference error

//Error handling
//Try-catch block
try{//write code jahan error aa sakta hai
    console.log("Try block starts here");
    console.log(y);
    console.log("Try block ends here");

}

catch(err){//catches error in try block
    //define error ke sath aap kya karna chahte
    //retry loguc
    //fallback machanism
    //logging
    //custom error
    console.log("I am inside catch block");
    console.log("Your error is here",err);
}

//try block me error nahi aata to catch block isn't executed

//finally block
//this will run every time error aaye ya na aaye
finally{
    console.log("I will run every time, I am finally block"); 
}

//throw a custome error
//throw keyword

try{
    //reference error
    console.log(j);
}
catch(err){
    throw new Error("Pehle declare karo");
}
let errorCode=100;
if(errorCode=100){
    throw new Error("Invalid JSON");
}

