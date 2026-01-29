//Dynamic nature of object
//properties can be changed at run time
let obj={
    age:12,
    wt: 68,
    ht: 180
};

console.log(obj);
obj.color="white";
console.log(obj);

//Object Cloning
let a={val:12};
let b=a; //reference copy
//new object is not created, just a new pointer is created
//this is shallow copy, not cloning

//Ways to clone an object
//spread operator ...
let src={age:12};
let dest={...src}; //cloning
console.log(dest);
src.age=20;
console.log(dest); //dest.age is still 12
console.log(src); //20

//Object.assign()
let source={wt:68};
let destination=Object.assign({},source);
console.log(destination);
source.wt=75;
console.log(source);
console.log(destination); //destination.wt is still 68
let src2={ht:180};
let dest2=Object.assign({},src,src2);
console.log(dest2); //{age: 20, ht: 180}

//iteration over object properties
//difficult for nested objects
let src3={
    age:12;
    wt:68,
    ht:180
};
let dest4={};

for(let key in src3){
    dest4[key]=src3[key];
    //let newKey=key;
    //let newValue=src[key];
    //dest4[newKey]=newValue;
}

//Garbage collector
//Memory that is no longer in use can be freed
//Used for memory management to reduce memory leak
//Memory leak- Jo memory free honi chahiye par hai nahi jis wajah se ham use nahi kar pate so its wasted
//We cannot control GC, it always keeps running in the background





