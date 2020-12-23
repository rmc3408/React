
/************* */
// MAP FUNCTION
/************* */

// Make run one function for each Array elements.

const num = [1, 2, 3, 4];

//ES5 Javascript
const addedNum = num.map(function (num) {
    return num + 1;
});
console.log(addedNum);

//ES6 Javascript = full written code
const doubleNum = num.map(
    (num) => { return num * 2; }
    
);
//Clean code ---
// 1) One argument not
const tripleNum = num.map( num => num * 3 );
console.log(num);
console.log(doubleNum);
console.log(tripleNum);


// If not using any parameter, use ().
const nameNum = num.map(() => 'bob');
console.log(nameNum);



/************* */
// FILTER FUNCTION
/************* */

// Keep only older than 20 years, or remove lower than 20.
const ages = [23, 21, 17, 30];

//const adults = ages.filter(function (year) {
//    return year > 20;
//});

const adults = ages.filter( year => year > 20 );
console.log(ages);
console.log(adults);


/*
JavaScript array functions like map() , filter() , reduce().

Particularly important in this course are:

map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/