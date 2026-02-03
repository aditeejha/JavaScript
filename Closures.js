//Closure-> function ko jab uske reqd data ke sath bind karte hain tab wo closure ban jata hai.
//function+reqd dara(lexical scope/surrounding scope)
let name="Mira"
function name(){
    let name="Kia";
}
function outerFunction(){
    let name="Tia";//let->block scoped
    function innerFunction(){
        let name="Sia";
        console.log(name);
    }
    innerFunction();
}
outerFunction();

//ek aisa case jahan do function nested hain aur inner function ko aapne call kardia hai aur inner function jis value par dependent hai
//wo value memory se free kardi gai hai to wahan par kya hone wala hai
// error aayega ya sahi salamat chalega

function outerFunction(){
    let name="Bulbul";

    function innerFunction(){
        console.log(name);
    }
    return innerFunction;
}//yahan outer function kahtam hogaya to name variable ki memory free kardi gai
let inner=outerFunction();
inner();
//inner function me still name print ho raha
//kyunki innerFunction apne data ke sath bind hogaya hai
//copy ya naya variable nahi bana hai, bas reference aa gaya hai us variable ka
//nested function ko uski reqd value ke sath bind ho jata
//naya variable ya copy nahi banti, bas variable ka reference pass hota hai
