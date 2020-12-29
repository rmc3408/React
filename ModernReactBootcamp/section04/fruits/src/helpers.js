
const choice = (items) => { 
  const numFruit = Math.floor(Math.random() * items.length);
  //console.log(items[numFruit]);
  return items[numFruit];
};

// const remove = (items, item) => {
//   //console.log(items);
//   let selected = items.filter(f => f !== item); //get all different fruits.
//   const newRemain = [...selected];
//   //console.log(newRemain);
//   return newRemain;
// };

function remove(items, item) {
  //console.log(items);
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      //console.log(items[i]);
      const secondCut = [...items.slice(0, i), ...items.slice(i + 1)];
      //console.log(secondCut);
      return secondCut;
    }
    
  }
}

export { choice, remove };
