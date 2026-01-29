//make changes in HTML using JS
//Window - a global object aur hierarchy me sabse upar hota hai
window.console.log("Adi");//Window ke hi andar sare global objects aate
//Window object is created by browser

//DOM - Document Object Model
//If you have a HTML code written and u wanna convert into a JS code, then that JS object is called Document
//and overall it is called document object model
//tree like structure

//if you type document in console window on browser - shows all HTML code
//tokenizer - converts HTML tags into tokens which are in turn converted into nodes 
//bht sare objects milke DOM banate

//window ke andar DOM, BOM, JS Core aata

//BOM- Browser Object Model
//Jo bhi interaction browser ke sath ho rahi, leaving the HTML content
//History=screen Resize, navigation etc

//changing HTML

//ACCESSING ELEMENT

//ID ke basis pe, class name, tag name ke basis pe
//in response single/multiple o/p le sakte

//Do In Browser Window
//applied on document object only
document.getElementById("fpara");
//output me single element lake de deta jiski id match kar jati hai

document.getElementsByClassName('textMatter');
//returns multiple element of same class name

document.getElementsByTagName('p');
//gives multiple elements of the same tag mentioned

//Query Selector
document.querySelector('#fpara');
document.querySelector('.textMatter');
document.querySelector('p');
//id -> # | class-> . | tag-> p
//querySelector gives just one element jo sabse pehle likha gaya hai
//to select all
document.querySelectorAll('p');//gives all elements using tag p

//select the elemnt on browser windo and select it
//then console window pe write $0 that element will be selected
let para=$0;//storing selected element in variable
para//print

//UPDATING ELEMENT

//inner Html-kisi bhi tag ya element ke andar jo html hai use get ya set kar sakte
let button=$0;
//get
button.InnerHTML //button ke andar jo bhi tags ya HTMl content hai dikh jata
//set
button.InnerHTML='<p>Hello Jee</p>';
button//print button


//outer HTML


//text content- kisi bhi element ka text content get or set
let element=document.querySelector('#fdiv');
element.textContent; //enter kahan hit kia wo bhi visible hoga


//inner Text
element.innerText;
//Jaise elements ko aap render karte UI par, same waise aapko innerText output dega
//textContent dekhta hai aapne code ke andar kaise likha hua hai, space kahan, tab kahan etc


//ADDING ELEMENTS
//creation-> create element method
//append child method

let fHeading=document.createElement('h1');
fHeading.textContent="My name is Aditee";

//agar h1 ko child banana chahte body ka
let bodyTag=document.querySelector('body');
bodyTag.appendChild(fHeading);

//appendChild()-> child hamesha end me add ho raha hota hai

//deciding the position where I add my child
//insertAdjacentElement() method
//provide position and HTML content to be inserted
//4 types of position
//before begin, after begin, before end, after end

let mydiv=document.querySelector('#mydiv');
let newElemet=document.createElement('span');
newElemet.textContent="This is me, Aditee";
mydiv.insertAdjacentElement('beforebegin',newElement);

//REMOVAL
//removechild()
//parent ke bare me batana aur kaunsa child

//sirf child object use karke parent ko find kar sakte??

let parent=document.querySelector('#mydiv');
let child=document.querySelector('#fpara');
parent.removeChild(child);



