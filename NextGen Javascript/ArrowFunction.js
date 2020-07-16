//Regular function
function print(age){
    console.log(age);  
  }
  print(38);
  
  // Arrow function .. Write like this if no Return.
  let personal = (name, age) =>{
    console.log(name, age);
  }
  
  personal('raph', 39);
  
  
  // If return ... here is full structure.
  const duplicate = (num) =>{
      return num * 2;
  }
  console.log(duplicate(3));
  
  
  //Simplified version with return.
  const duplicateNew = (num) => num * 2;
  
  console.log(duplicateNew(3));
  