// class Person {
//     // name: string; default is public
//     private type: string;
//     protected age: number; //can inherit to other but not outside


//     //add a public property
//     constructor(public name: string, public username: string) {
//         this.name = name;
//     }

//     printAge(){
//         console.log(this.age);
//         this.setType("Old guy")
//     }

//     private setType(type: string){
//         this.type = type;
//         console.log(this.type);
//     }

// }

// const person = new Person(
//     "Irdi",
//     "iavxhi"
// );


// console.log(person);
// person.printAge()
// // console.log(person.printAge());
// console.log(person.name,person.username);
// // person.setType("type")


// //Inheritance
// class Irdi extends Person {

//     constructor(username:string){
//         super('Irdi1', username);
//         this.age = 24;
//     }
// }        

// const irdi = new Irdi('iii');
// console.log(irdi);


// //GETTERS AND SETTERS
// class Plant {
//     private _species: string = 'Default';

//     get species(){
//         return this._species;
//     }
//     set species(value: string){
//         if(value.length == 0) 
//         this._species = 'No Value';
//         this._species = value;
//     }
// }


// let plant = new Plant();
// //return a value
// console.log(plant.species);

// //assign new value to the setter
// plant.species = 'AB';
// console.log(plant.species);




// // static properties and methods
// class Helpers {
//    static PI:number = 3.14;

//    static calcCircumference(diameter: number): number{
//        return this.PI * diameter;
//    }
// }

// console.log(Helpers.calcCircumference(2));

// //Abstract classes


// abstract class Project {
    
//     projectName : string;
//     budget: number;

//     abstract changeName(name : string): void;

//     calcBudget(){
//         return this.budget = 2;
//     }

// }


// class ITProject extends Project {
//     changeName(name : string) : void {
//      this.projectName = name;
//     }
// }


// let newProject = new ITProject();

// console.log(newProject)
// newProject.changeName("New project");
// console.log(newProject);


// //private constructors

// class OnlyOne {
//     private static instance : OnlyOne;
    
//     private constructor(public readonly name : string){}

//     static getInstance() {
//         if(!OnlyOne.instance){
//             OnlyOne.instance = new OnlyOne('The only one');
//             return OnlyOne.instance;
//         }

//     }

// }


// let right = OnlyOne.getInstance();
// console.log(right);

// //read only
// console.log(right.name); //it works but complains for nothing
