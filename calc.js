var colors = require('colors');
const {argv} = require('yargs')
 
    // if ( argv.b != 0) {
    // console.log(' a/b = ', argv.a/argv.b)
    // } else {
    // console.log('Donkey XD'.red)
    // }


let numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(element => {
    console.log(`${argv.a}x${element} =`,argv.a * element );
});