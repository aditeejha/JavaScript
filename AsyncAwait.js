//Async-await: iska use karke async code ko sync behaviour provide kar sakte
//async code ko sync code ki tarah darsha paate

//kisi ko await mark karna matlab pehle wo async code execute hoga then hi next sync cde pe jaenga
async function getData(){
    setTimeout(function(){
        console.log("I am inside set Timeout")
    },3000);
}
getData();

//await -?

//fetch API-> provides an interface to use internet tools


//async await ka use mai tabhi karungi jab mujhe promises ka use karna hai
//async function hamesha ek promise return kar raha hota hai

//await sirf async function ke liye use kar sakte
//to pehle async function mark karna padta
