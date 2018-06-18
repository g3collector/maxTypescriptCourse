/*
//DECORATORS
//CREATING A CLASS DECORATOR
function notlogged(constructorFn : Function){
   
}

function logged(constructorFn : Function){
    console.log(constructorFn);
}

@logged
class Person {
    constructor(){
        console.log("hi");
    }
}

// Factory
function logging(value : boolean){
    return value ? logged : notlogged;
}

@logging(false)
class Car {
    constructor(){

    }
}


// Advanced

function printable( constructorFn : Function ) {
    constructorFn.prototype.print = ()=>console.log(this);
}


@logging(true)
@printable
class Plant {
    name = "Green Plant";
}

const plant = new Plant();
(<any>plant).print();




//Method Decorators
//PROPERTY DECORATORS

// method decorator
function editable(value : boolean){
    return function(target : any , propName : string , descriptor : PropertyDescriptor ){
        descriptor.writable  = value;
    }
}


function overwritable(value : boolean) : any {
    return function(target : any , propName : string ){
        const newDescriptor : PropertyDescriptor = {
            writable : value
        }
        return newDescriptor;
    }
}


class Project {

    @overwritable(false)
    projectName : string = "g3colector";

    constructor( name : string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(100);
    }
}

const project = new Project("super project")
project.calcBudget();
project.calcBudget = function(){
    console.log(20000);
}
project.calcBudget();
project.projectName = "irdi"
console.log(project.projectName);


//Parameter Decorator


function printInfo(target : any ,  methodName : string , paramIndex : number) {
    console.log("Target" , target)
    console.log("Method" , methodName);
    console.log("paramIndex", paramIndex)
}
*/

/*

class Course {
    name : string;
    constructor (name : string){
        this.name = name;
    }

    printStudentNumbers(mode : string , @printInfo printAll : boolean){
        if(printAll){
            console.log(10000)
        }else{
            console.log(20000);
        }
    }
}


const course = new Course("New course");
course . printStudentNumbers("anything",true);
course . printStudentNumbers("anything",false);


*/