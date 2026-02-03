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