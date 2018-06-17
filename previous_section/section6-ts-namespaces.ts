// //namespace like scope


// /**
//  * 1 version
//  */
// //u can bundle them in 1 file by

// /*
// tsc  --outFile app.js ./namespaces/cirlceMath.ts 
// ./namespaces/rectangleMath.ts app.ts
// */


// /**2nd import typescript style */

// /// <reference path="namespaces/circleMath.ts"/>
// /// <reference path="namespaces/rectangleMath.ts"/>

// /*
// tsc --outFile app.js
// and in tsconfig.ts disable module:'commonjs'
// **/

// import CircleMath = MyMath.Circle;


// const PI = 2.99;
// console.log(MyMath.calculateRectangle(10,20));
// console.log(CircleMath.calculateCircumferences(3));
// console.log(PI);

// //dissadvantage of namespaces modules not very declarative
// //not managable for big projects
// //es6 modules are better