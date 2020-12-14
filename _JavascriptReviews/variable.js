
// Variable VAR - if declare in function or condition , works after.. It is a Global Scope
const myname = 'raph';

if (myname === 'raph') {
    var fullName = "Raphael";
    console.log('Inside function = ' + fullName);
}
console.log(fullName); //WORKS FINE



// Variable LET - if declare inside function or condition , works temporary as block scope
const myName = 'raph';

if (myName === 'raph') {
    let fname = "Raphael";
    console.log('Inside function = ' + fname);
}
console.log(fname); //ERROR, let only works inside


//Variable CONST - works as block scope and Immutable
const a = 11;
console.log(a);
//a = 5; ERROR
console.log(a);

//Object CONST - You can change the properties of object, not value of object.

const person = { name: 'Bill' };

person = { name: 'Sarah' }; //ERROR
person.name = 'Sarah'; 
