
// /** scope */
// console.log("LET AND CONST");
// let variable = "test";
// console.log(variable);

// /** cannot change immutable */
// const maxLevels = 100;
// console.log(maxLevels);
// //maxLevels = 99 ; //wont work

// //Block Scope
// function reset(){
//     // console.log(variable);
//     let variable = null;
//     console.log(variable);
// }

// reset();
// console.log(variable);

// //arrow functions
// console.log("ARROW FUNCTIONS");

// const addNumbers  = function(number1:number , number2:number):number {
//     return number1 + number2;
// }

// console.log(addNumbers(10,2));

// const multiplyNumbers = (number1:number, number2:number) : number=>number1 * number2;

// console.log(multiplyNumbers(10,2));


// console.log("DEFAULT PARAMETERS");

// const countdown = (start: number = 10 , end : number = start+5) : void => {
//     console.log(start,end);
// }

// countdown();


// console.log("REST AND SPREAD OPERATORS");

// //function call spread operator
// const numbers = [1,10,88,-5];
// console.log(Math.max(33,99,10,3));

// console.log("Spread operator",Math.max(...numbers));//spread opaerator

// //rest parameter
// function makeArray(name:string , ...args:number[]) : number[] {
//     return args;
// }

// console.log(makeArray('hello',1,2));


// // destructing arrays
// console.log("DESTRUCTURING");

// const myHobbies = ["cooki", 'sports'];

// const [hobby1 , hobby2 ] = myHobbies;

// console.log(myHobbies[0],myHobbies[1]);
// console.log(hobby1,hobby2);


// //destructure object
// const userData = {username : 'irdi', age : 22};
// const {username:myName , age:myAge} = userData;

// console.log(myName, myAge);

// //template literals

// const userName = 'Irdi';

// const greeting = `This is a heading
// I'm ${userName}
// This is cool
// `;

// console.log(greeting);
