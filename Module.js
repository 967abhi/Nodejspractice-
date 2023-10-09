//Module 
// common every file is module (by default)
// Modules-Encapsulated Code (only share minimum);


const names=require('./4-NAME.JS')  
const sayHi =  require('./5-utilis.js');
console.log(names);
console.log(sayHi);
sayHi('Abhishek');
sayHi(names.john);
sayHi(names.peter);
