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


