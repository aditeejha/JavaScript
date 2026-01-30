//changing CSS using JS
//external CSS, inline CSS, internal CSS
//inline- highest priority

//.style- kisi bhi element ki inline style ko fetch ya change kar sakte
//one property at a time
//run in browser window

let paraElement=document.getElementById('spara');
console.log(paraElement.style);

paraElement.style.backgroundColor='blue';

//single inline style hi pakad pate lekin

//to handle multiple properties at once:
//.cssText-> Multiple inline styles ko access/set kar sakte

let secondElement=document.getElementById('sdiv');
secondElememt.style.cssText;

secondElement.style.cssText="background-color: black; color:white; padding: 0.5rem";

//adding class name or id
//.setAttribute()-> koi bhi attribute jo aap bataoge aur uski value bataoge to ye us element ki us class me wo value set kar dega

let firstElement=document.querySelector('#fdiv');
firstElement.setAttribute('class', 'divClass');
firstElement //print
firstElement.setAttribute('class', 'seconndDivClass');
//agar pehle se class ki value padi hai to wo update ho jaegi
firstElement.setAttribute('style', 'padding: 0.1rem');
//jab yahan aapne style change ki to puri ki [puri style hat gai pehle ki aur bas ye padding reh gai
//.setAttribute() puri ki puri value jad se hata deta hai aur nai value set kardeta hai


//.className-> class ke name ko get karwa deta
//khud se single ya mulriple class insert karna chahte to wo kardeta

fpara.className //get

fpara.className="Gohan Bulbul" //add hogai class
//aur pehle se present to overwite/update hojata


//.classList -> get multiple classes in format of array
//koi bhi class add/remove/toggle(added ko remove n vice versa)/contains

letfpara=document.querySelector('#fpara');
fpara.classList//fetch classes in form of array present in an element

fpara.classList.add('thirdClass')//adds new class
fpara.classList.remove('goku')//remove a class
fpara.classList.toggle('vegeta')//present thi to toggle wale case me hata dia gaya
fpara.classList.toggle('vegeta')//present nhi to add kardi gai
fpara.classList.contains('vegeta')//checks if class is present or not -> true/false value
