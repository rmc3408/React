const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
console.log('--------- Full Array with length ----------');
console.log(num);
console.log(num.length);
console.log('-------------------------------------------');
console.log('');
console.log('');


const remove = (items, item) => {
  let selected = items.find(f => f == item); //return only THE result found!!
  return selected; 
  
};
let rem = remove(num, 11);
console.log('-- Find one specific item from array and return it------');
console.log('The remained items are ' + rem);



console.log('-- Find will return ONLY ONE item from array and return it------');
const remove2 = (items, item) => {
  let selected = items.find(f => f !== item); //ERROR... can only return ONE result found!!
  return selected; 
  
};
//let rem = remove2(num, 11);
//console.log('The remained items are ' + rem);

console.log('');
console.log('');




const remove3 = (items, item) => {
  let selected = items.filter(f => f !== item); //Return all valid results !!
  return selected; 
  
};
let rem3 = remove3(num, 11); //Just Filter, it not remove
console.log('-- For MORE THAN ONE result, use FILTER with condition ------');
console.log('The remained items are ' + rem3);
console.log('-- filter does not change the original array.. is just a query condition ------');
console.log(num);

console.log('');
console.log('');


console.log('------  REMAINDERS -----------');

const remain = (items, item) => {
  let selected = items.filter(f => f !== item);
  console.log('-  1) use filter to selected ');
  console.log(selected);
  
  console.log('-  Alternative 2.1) copy query to new array using spread operator [...] ');
  const newRemain = [...selected];
  console.log(newRemain);
  
  console.log('-  Alternative 2.2) Get index of item and Splice from the array');
  let numSelected = items.indexOf(item);
  let remainders = items.splice(numSelected, 1);
  
  console.log('item removed from array is '+ remainders);
  console.log('Final array withOUT item is '+ items);
  
};

remain(num, 4);
