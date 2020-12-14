
const names = ['a', 'b'];
const moreNames = ['d', 'e'];

console.log(names); //print the reference  ["a", "b"]
console.log(...names); //print the values.  "a"  "b"

const WrongNames = [names, 'c', moreNames];
console.log(WrongNames); // [["a", "b"], "c", ["d", "e"]]
//Wrong because copy reference.

//Spread
let rightNames = [...names, 'c', ...moreNames];
console.log(rightNames); //["a", "b", "c", "d", "e"]


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

