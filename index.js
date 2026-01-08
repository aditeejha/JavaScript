// console.log("Hello World!");
// //var age=25; //global variable
//  if(true){
//     console.log(age); 
//  }
//  function solve(){
//     var age=25;
//     console.log(age);
//     }
//     //console.log(age); won't work here
//     solve();
// var x=10;
// var x=20;
// console.log(x);

function changeText(){
    let fpara=document.getElementById('firstpara');
fpara.textContent="Hello Aditee";
}
let fpara=document.getElementById('firstpara');
fpara.addEventListener('click',changeText);
