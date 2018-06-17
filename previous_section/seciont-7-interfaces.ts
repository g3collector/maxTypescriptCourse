// type Person = {
//     name : string
// } cannot be used like interface
interface Person {
    name : string
    age? : number;//optional argument
    [propName : string] : any; //property
    greet(name : string) : void
}


function greet(person  : Person){
    console.log(` Hello , ${person.name}`);
}


function changeName(person : Person ){
    person.name = "Hello"
}
const person = {
    name : "Irdi",
    age : 24,
    hobbies : ["Cookies", "Sports"],
    greet(name: string){
        console.log(`Hi i am ${this.name}`);
    }
}
person.greet("Anything")
greet(person);
// greet({name : "irdi", age : 24 ,  greet(name:string){ console.log("hello")}});


class NamedPerson implements Person {
    name : string
    lastName : string;
    greet(name : string) : void {
        console.log(` Hello , ${name}`);
    }
}

const myPerson = new NamedPerson();
myPerson.name = "Irdi";
myPerson.lastName = "hello";
greet(myPerson);
myPerson.greet("anything");


//Function Types
interface DoubleValueFunc {
    (number1 : number , number2 : number) : number;
}

let myDoubleFunction : DoubleValueFunc;
myDoubleFunction = (number1 : number , number2 ) : number => {
    return number1 + number2;
}

console.log(myDoubleFunction(10,20))



//interface inheritance

interface AgedPerson extends Person {
    age : number;
}

const oldPerson : AgedPerson = {
    age : 24,
    name : 'Irdi',
    greet (name : string){

    }
}