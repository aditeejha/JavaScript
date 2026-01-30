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




//removeEventListener()