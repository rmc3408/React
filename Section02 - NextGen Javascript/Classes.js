function 


class Animal {
    /* OLD Syntax : ES5
    constructor
    {
    this.name = 'old specie'; 
    }
    function makeSound() {
        console.log("GRR");
    }*/
    
    //NEW : ES6
    name = 'specie'; //hidden constructor
    makeSound = () => { console.log(this.name); }

}
const a1 = new Animal();
console.log(a1.name);
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

