
//Regular function
function print(age){
    console.log(age);  
  }
  print(38);
  
  // Arrow function .. Write like this if no Return.
  let personal = (name, age) =>{
    console.log(name, age);
  };
  
  personal('raph', 39);
  
  
  // If return ... here is full structure.
  const duplicate = (num) =>{
      return num * 2;
  };

  console.log(duplicate(3));
  
  
  //Simplified version with return.
  const duplicateNew = (num) => num * 2;
  
  console.log(duplicateNew(3));
  




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
// 1) One argument not need parenthesis
// 2) One line code, not need block code {}
// 3) no need return
const tripleNum = num.map( num => num * 3 );
console.log(num);
console.log(doubleNum);
console.log(tripleNum);


// If not using any parameter, use ().
const nameNum = num.map(() => 'bob');
console.log(nameNum);

