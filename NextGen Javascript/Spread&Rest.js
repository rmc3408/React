
// Spread more data into arrays
const nums = [1, 2, 3];

//array inside array. 
const newNums1 = [nums, 4];
console.log(newNums1);

//merge array elements.
const newNums2 = [...nums, 4, 5];
console.log(newNums2);




// Spread into Objects
const person = {
    name='Raphael',
    age=38
};

const morePerson = {
    school="Centennial",
    ...person
};

console.log(morePerson);