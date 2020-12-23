class Persona {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
}


// Prototype will add a new function or variable OUTSIDE CLASS.
Persona.prototype.speak = function () { 
    console.log(`Hi, my name is ${this.name} and i have ${this.age}!`);
};


const bill = new Persona('bill', 38);
bill.speak();
