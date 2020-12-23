
// Spread INDIVIDUAL ELEMENTS data into arrays, not the whole array
const nums = [ 1, 2, 3 ];
const nums2 = [5, 6, 7];

//array inside array. 
const newNums1 = [nums, 4];
console.log(newNums1);

//merge individuals array elements.
const newNums2 = [...nums, 4];
console.log(newNums2);

//combine arrays.
const plusNums = [...nums, 4, ...nums2];
console.log(plusNums);

// Spread into Objects
const person = {
    name:'Raphael',
    age:38
};

const morePerson = {
    school:"Centennial",
    ...person
};

console.log(morePerson);


//Rest - accept multiple arguments 
const check = (...args) => {
    return args.filter(elem => elem === 1);
}
console.log(check(2,1,3,'1',1));

