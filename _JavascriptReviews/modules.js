function help() {
    console.log('I did help it');
}

function sort() {
    console.log('I will separate');
}

function sing() {
    console.log('I can sing');
}

export default help; //export only helpfull function
export { sort, sing }; //export selected items or function

/////// 
import help, { sort } from './modules';


const foo = 10;

export default foo; //export the constant foo


// On the target file
import foo from './boo.js';
import { foo } from './boo.js';
