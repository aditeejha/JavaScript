//class- define a blueprint for creating objects with specific properties and methods
//object- instance of a class
class Human{
    //properties
    age; //marked public as default, can be used outside class
    #wt=80; //private- data member that can be used only inside class
    ht=180;

    constructor(newAge, newWeight){
        this.age=newAge;
        this.#wt=newWeight;
    }

    //behaviour
    #walking(){
        console.log("Human is walking",);
    }

    running(){
        console.log("Human is running", this.#wt);
        //now wt can be used here as well
    }

    get fetchWeight(){
        return this.#wt;
    }

    set modifyWeight(val){
        this.#wt=val;
}
}

let obj=new Human(50,190); //constructor called
console.log(obj.age); //13
obj.walking(); //Human is walking
console.log(obj.#wt); //SyntaxError: Private field '#wt' must be declared in an enclosing class
obj.running(); //Human is running 80
console.log(obj.fetchWeight); //80

//getters and setters- access and update private properties
// get set function ke bina bhi we could create those functions, but semantic clarity mil jati hai
//for encapsulation and data security
//encapsulation- bundling data and methods that operate on that data within one unit


//constructor- special method to initialize objects

obj.modifyWeight=85; //setter called
console.log(obj.fetchWeight); //85