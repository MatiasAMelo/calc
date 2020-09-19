var colors = require('colors');
const {argv} = require('yargs')
const {sum,minus,product,divide} = require('./operations/basic')


    // if ( argv.b != 0) {
    // console.log(' a/b = ', argv.a/argv.b)
    // } else {
    // console.log('Donkey XD'.red)
    // }
console.log((argv.a, argv.b));
    //console.log(sum(argv.a, argv.b));
    //console.log(minus(argv.a, argv.b));
    //console.log(product(argv.a, argv.b));
    //console.log(divide(argv.a, argv.b));
   
// let numbers = [1,2,3,4,5,6,7,8,9,10];

// numbers.forEach(element => {
//     console.log(`${argv.a}x${element} =`,argv.a * element );
// });