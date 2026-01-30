//Eevent- Like an announcement
//Browser Evenets(announcements done by browser)-> click on window, double click, scroll, key press
//Har ek event ke sath ek action attach hota-> double click se picture like
//run on console window

monitorEvents(document);
//click on screen? or scroll?
unmonitorEvents(document);

//Event Target: an entity jahan par aapka event receive hua hai.. element/location
//ex button is event target, click is event
//Event Listener: click hone ke baad ye kya action perform karega, wo action hamne ek location pe likha hota hai
//that location is event listener
//Event Listener: we define event target pe ye event aaye to kya action perform karna hai

//addEvenetListener()
//syntax
//<event_target>.addEventListener(<event_type>,<function->action>)

function changeText(){
    let fpara=document.getElementById('fpara');
fpara.textContent="Hello Aditee";
}

let fpara=document.getElementById('fpara');
fpara.addEventListener('click', changeText); //click karne pe para ka text content change
//changeText ke jagah direct pura function bhi likh sakte

//removeEventListener()
fpara.removeEventListener('click', changeText);
//add ke andar jo passs kia tha remove me exactly wahi same function hona chahiye, warna remove nahi ho paega kyunki do different objects ho jaenge
