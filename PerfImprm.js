//Performance Improvement:
//measure? efficient/good practice?

//showing 100 para
//manually or using loop

//cpde 1
//100 para ko seedhe document me add kia
const t1=performance.now();
for(let i=1; i<=100; i++){
    let para=document.createElement('p'); 
    para.textContent="This is para"+i;
    document.appendChild(para);
}
const t2=performance.now();
console.log("time is"+(t2-t1));

//standard way to find how much time my code is taking time to run
//performance.now()-> gives timestamp

//code 2
//100 para pehle div me add kia then last me div ko document me add kia
let mydiv=document.createElement('div');
for(let i=1; i<=100; i++){
    let para=document.createElement('p');
    para.textContent="this is para"+i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

