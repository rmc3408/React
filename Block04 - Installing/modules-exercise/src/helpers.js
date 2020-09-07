const choice = (items) => { 
    const numFruit = Math.floor(Math.random() * items.length);
    return items[numFruit];
};

const remove = (items, item) => {
    let selected = items.filter(f => f !== item);
    const newRemain = [...selected];
  console.log(newRemain);
  return newRemain.length;
};

export { choice, remove };
