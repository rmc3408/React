
const person = {
    name: 'bill',
    age: 50    
};
console.log(person);

function Person (name, age){
	this.name = name;
  	this.age = age;
}

// Prototype will add a new function or variable OUTSIDE CLASS.
Person.prototype.speak = function(){
	console.log(`Hi, my name is ${this.name} and i am ${this.age}`);
};
const nova = new Person('Lona', 34);
console.log(nova);

bill.speak();


//////////////////////// WITH CLASS //////

class Persona {
    constructor(name, age, children) {
        this.name = name;
        this.age = age;
        this.children = children;
    }
    speak() {
        console.log(`Hi, my name is ${this.name} and i have ${this.age} years old!`);
    }
    birth(child) {
        this.children.push(child);
        return this.children;
    }
}
const bill = new Persona('bill', 38, ['Shaw', 'Steph']);
bill.speak();
bill.birth('Jess');
console.log(bill.children);
