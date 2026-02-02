//Event Loop
//Synchronus code: 
//Koi bhi aisa piece of code jo same time pe execute hojata jaise hi aapka flow of execution us code par pohonch jata
//console.log("hi");

//Asynchronus code:
//jo same time par execute nahi hota jab flow of execution wahan pohonchta
//setTimeout(function, duration) -> given duration ke baad us function ko run kardena(time in milisec)?

function sayMyName(){
    console.log("Aditee");
}
setTimeout(sayMyName,5000);
//no gurantee ki 5 sec baad hi print ho
//zada time bhi lag sakta

//Blocking
console.log("start");
setTimeout(sayMyName,5000);
console.log("end"); //ye upar wali line execute hone ke baad run karega, waits till then


//Event Loop
//1. Call stack
//2. Browser
//3. Call Back Queue
//call stack me jab bhi koi async code aata hai, wo use browser ko de deta taki blocking na ho, next function pe chala jata
//jab handover hota browser ko tab uski entry hat jati call stack se
//wo function ke baad chorke next function execute ho jata

//5000 milisec ke baad directly execute nhi hoga, wo callback queue me aa jata
//fir checks if call stack is empty, then wahan top me jata queue se and gets executed

//loupe by philip roberts to understand

//call stack me queue se event loop ke through jata, when call stack is empty


