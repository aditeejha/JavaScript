//sequence of characters
let name="Aditee";
//let name='Aditee';
//let name="Aditee
//Jha"; //multi-line string error
let fullName=`Aditee
Jha`; //multi-line string using backticks
let surname=new String("Jha");

//operations on strings
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.indexOf("d"));
console.log(name.charAt(2));
console.log(name.substring(0,4));


let op1='English';
let op2='Maths';
let ans=op1+op2;
console.log(ans);
let finalAns=`op1 + op2`; //op1 + op2
console.log(finalAns);
let finalAns2=`${op1} + ${op2}`; //English + Maths
console.log(finalAns2);
//finalAns2=`${op1} + ${op2} = ${op1 + op2}`; //English + Maths = EnglishMaths
//console.log(finalAns2);


let sentence="hello jee kaise ho sare";
let words=sentence.split(" ");
console.log(words);
let sen=words.join("_");
console.log(sen);
let line="I \am \doing \good";
// \ is an escape character
let newline=line.replace(/\\/g, " ");
console.log(newline);

