
/**************
 * FUNCTION 
****************/


//No arguments. On ES6 you use hidden constructor
class Specie {
    name = 'human'; 
    makeSound = () => { console.log(this.name); }
}
const a1 = new Specie(); //NO parameter
console.log(a1.name);
a1.makeSound();



//There are arguments. On ES6, create constructor + property out of constructor
class Animal {
    constructor(name){
      this.name = name;
    }
    type = 'Animal'; 
    makeSound = () => { console.log(this.name + " make sound like " + this.type); }

}
const a1 = new Animal('dog');
console.log(a1.name);
console.log(a1.type);
a1.makeSound();





class Human {
    sound = 'voice';
    name = name;

    printSound = () => {
        console.log(this.sound);
    }
} 

class Person extends Human {
    name = 'Max';
    printName = () => { console.log(this.name); }
}

const p1 = new Person();
p1.printName();
p1.printSound();




/*   OLD VERSION : ES5
  
class Human {

    constructor() {
        this.sound = "noise";
    }

    printSound() {
        console.log(this.sound);
    }
} 

class Person extends Human {
    
    constructor() {
        super();
        this.name = 'Max';

    }
    printName() {
        console.log(this.name);
    }

}
*/

