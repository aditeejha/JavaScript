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


//Phases of an event
<div>            
    <article>
        <h1></h1>
        <p></p>
    </article>
</div>

//DOM tree: div
//           |
//        article
//           /\
//          h1 p
//click karne pe div ke pass aaya then article pe then p pe
//this is capturing phase-> event target pe pohoncha jata hai
//at Target phase- jab target pe aagaye
//p se wapis article pe wapis div pe jana
//called Bubling phase-> target element se root element tak jana

//addEventListener()-> by default applied in bubbling phase
//capture phase me pass karne ke liye ek value hoti hai jo true pass karni hoti hai
//useCapture ki value true



//addEventListener() MDN