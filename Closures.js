//Closure-> function ko jab uske reqd data ke sath bind karte hain tab wo closure ban jata hai.
//function+reqd dara(lexical scope/surrounding scope)
function outerFunction(){
    let name="Babbar";//let->block scoped
    function innerFunction(){
        let name="Love";
        console.log(name);
    }
    innerFunction();
}
outerFunction();