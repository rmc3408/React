const choice = (items) => { 
    const numFruit = Math.floor(Math.random() * items.length);
    return items[numFruit];
};

const remove = (items, item) => {
    let selected = items.find(f => f === item);  
    return selected; 
};

export { choice, remove };
    
/* USING MAP or FIND to select the random fruit

const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const remove = (items, item) => {
  console.log(items);
  console.log(item);
  let thefruit;
  
  selected = items.map((f,index) => {
    
    // items[index]==item ? item : 'False';
    
    if(items[index]==item){
      thefruit = item;
      return item;
    }
    return 'false';
      
    });
  console.log(selected);
  console.log(thefruit);
  return thefruit;
};

let final = remove(num, 2);
console.log('The final selected is ' + final);


--------------------------

const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const remove = (items, item) => {
  
  selected = items.find(f => f == item);  
  return selected; 
  
};

let final = remove(num, 11);
console.log('The final selected is ' + final);
*/