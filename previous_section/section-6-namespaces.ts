//bundle in 1 file
//native js doesn't support imports 
//so we need system.js or amd
import * as Circle from './math/circle';
import calc from './math/rectangle';

console.log(Circle.PI);
console.log(Circle.calcCircumferance(10));
console.log(calc(20,50));

//we need a module loader 
//change from commonjs to amd
