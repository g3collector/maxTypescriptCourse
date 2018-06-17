//simple generic

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

