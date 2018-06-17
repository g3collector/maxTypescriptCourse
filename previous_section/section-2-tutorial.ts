//string
/*
let myName : string = 'Irdi';
let myNumber : number = 22;
let myBoolean : boolean = false;

let myRealAge: any;
myRealAge = 24;
myRealAge = '22';

//arrays
let hobbies : any[] = ['Cooking','Sports'];
console.log(typeof hobbies);//object
hobbies = [100];

//tuples
let address : [string,number] = ['Superstreet', 99];
console.log(typeof address);

//enum
enum Color {
    GREEN,//0
    YELLOW=100,//1
    BLUE//2//with the new assignment to yellow blue will be 101
}

let myColor:Color =  Color.BLUE;

console.log(myColor);

//any
let car: any = 'bmw';
console.log(car);
car = {brand : 'bmw', series: 3};
console.log(car);




//functions
function returnMyName():string{
    return myName;
}

console.log(returnMyName());



//void
function sayHello():void {
 console.log("Hello!");
}

//arguments
function multiply(value1:number,value2:number) : number {
    return value1*value2;
}

console.log(multiply(1,2));

//declaring a function type that cannot be assigned
let multiplyType: (val1:number , val2:number) => number;
//function types

let myMultiply:(val1:number , val2:number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2));


//is returned to a type
let userData : {name:string ,age:number}={name : 'irdi', age:26};
// userData = {
//     age:1,
//   name : 'hello'
// };

//all together
let complex : {data:number[] , output:(all:boolean)=>number[]} = {
  data : [100,3.99,10],
  output : function(all:boolean):number[]{
            return this.data;
    }
};



//type alias

type Complex = {data:number[] , output:(all:boolean)=>number[]};

let complex2:Complex = {
    data:[],
    output : function (all:boolean) {
        return this.data;
    }
};

//union types

let myRealRealAge : number|string = 27;
myRealRealAge = "27";


//checking the types in runtime
let finalValue = 'A string';

if(typeof finalValue === 'number'){
    console.log("final Value is a number");
}

//never type
//instead of error it should never be reached and when u throw the error
function neverReturns(): never {
    throw new Error('An error');
}

//nullable types
let canBeNull:number|null= 12;
canBeNull = null;//ts config "strictNullChecks": true, do not assign nulls to values that had value
let canAlsoBeNull;//undefined if is undefined it may also be null
canAlsoBeNull = null;

let canThisBeAny : number | null= null;
canThisBeAny = 12;
*/


