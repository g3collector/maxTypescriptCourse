//simple generic
/*
function echo(data : any){
    return data;
}

console.log(echo('irdi'))
console.log(echo(22));

//Better Generic
function betterEcho<T>(data:T){
 return data;
}


console.log(betterEcho('irdi').length)
// console.log(betterEcho(22).length); //can use a number and then i can't use not a number property after


//build in generics
const testResults : Array<number> = [1.9];
testResults.push(22);
console.log(...testResults);

//Arrays

function printAll<T>(args : T[]) {
    args.forEach(element=> console.log(element));
}

printAll<string>(["Apple", "Banana"]);

//generic types

const echo2 : <T>(data:T) => T = betterEcho;
console.log(echo2<string>("Smth"));


//generic classes
class SimpleMath<T extends U , U extends number | string , C extends string | number> {
    baseValue: T;
    multiplyValue: U;
    calculate() : number {
        // return this.baseValue * this.multiplyValue;
        return +this.baseValue * +this.multiplyValue;
    }
}


const simpleMath = new SimpleMath<string , string , number>();
simpleMath.multiplyValue = "10";
simpleMath.baseValue = "20";
console.log(simpleMath.calculate());
*/