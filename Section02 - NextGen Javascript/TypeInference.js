//Inference

//In primitive type, copy the value and type.
let a = 1;
let b = a;
a = 2;
console.log(b); // Output: 1;


//In Reference type, copy the memory adress.

const pOne = { name: 'Max' };
const pTwo = pOne;
pOne.name = 'Manu';
console.log(pTwo); //Output: Manu.


//TO AVOID this, use Spread(copy properties), not the object reference.
const pOne = { name: 'Max' };
const pTwo = { ...pOne };
pOne.name = 'Manu';
console.log(pTwo); //output: Max.


