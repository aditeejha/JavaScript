//Promise
//koi bhi async code hai, wo kya value return kar raha, ya uski state kya hai, to wo sab kaam Promise naam ka object kar raha hota
//3 states:
//pending, fulfilled and rejected

//returns a value promise ke madhyam se jab tak async code pura run nahi hua

//Promise is an object
//2 states: Resolved/fulfilled and Reject
//async code ko try to write in promise

//new Promise((resolve, reject)=> function)

let firstPromise=new Promise((resolve, reject)=>{
    console.log("Hi"); //sync. code runs on the spot
    resolve(1001);// kuch ni kia then status is pending
    //reject(new Error("Internal server error"));
});


let secondPromise=new Promise((resolve, reject)=>{
    setTimeout(function SayMyName(){
    console.log("my name is Aditee");
},10000);
resolve(1);
});
//async code runs in background parallel to sync process

//Promise: fulfilled hone ke bad koi task perform karna chahta
//then() ka use karke kar sakte

//ya promise fail/reject hone pe mai chahta ki ham error kya hai pakad paye
//use catch() function

let promise1=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Promise Fulfilled");
    }
    else{
        reject("Promise Rejected");
    }
});
promise1.then((message)=>{
    console.log("This ka message is"+ message);
    return"promise fulfilled second message";
}).then((message)=>{
    console.log("second msg:"+message);
}).catch((error)=>{
    console.log("Error:"+error);
    console.error(error);
}).finally((message)=>{
    console.log("Mai to final hoon, palla chalunga");
})

//Chaining Promises-> done above
//finally block-> hamesha run hoga, regardless promise reject hua ya resolve

let pr1=new Promise((resolve, reject)=>{
    setTimeout(resolve,1000,"First");
})

let pr2=new Promise((resolve, reject)=>{
    setTimeout(resolve,1000,"Second");
})

let pr3=new Promise((resolve, reject)=>{
    setTimeout(resolve,1000,"Third");
})

//jab bhi multiple promises jo concurrently execute ho rahe unhe run karna hai, use
//promise.all

Promise.all([pr1,pr2,pr3]).then((values)=>{  //naya promise create hogaya jo tab resolve hoga jab teeno promise resolve ho chuke honge unske andar ka
      console.log(value);
})
.catch((error)=>{
    console.log(error);
})
