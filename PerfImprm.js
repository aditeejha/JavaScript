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

//code 2 is faster


//Reflow
//process of calculating a position of an element that u want to render on page
//computationally intensive task
//slower


//Repaint
//process of displaying content/element pixel by pixel on UI(document)
//faster than reflow


//code me jitne reflow aur repaint kam, utna fast process
//code 1: each time we had to do reflow and repaint
//100 reflow and 100 repaint

//code 2: 
//div me para append karne ke liye no repaint
//document me div append then reflow and repaint

//Document Fragment: light weight document object
//iske andar addition karte kisi element ka to na ye reflow karta na repaint leta bas jab ise document me add karte tab 1 1
//document.body.append me 1 reflow and 1 repaint

//best code
let fragment= document.createDocumentFragment();
for(let i=1; i<=100; i++){
    let para=document.createElement('p');
    para.textContent="This is para"+i;
    //No reflow and No repaint for the below line
    fragment.appendChild(para);
}
//Takes 1 reflow and 1 repaint
document.body.appendChild(fragment);