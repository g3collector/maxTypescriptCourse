// Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

// Let's keep it simple and only add the following methods to the Map:

class MaxSolution<T> {
    private map : {[key:string] : T} = {};

    setItem(key : string , item : T) {
        this.map[key] = item;
    }
    getItem(key : string){
        return this.map[key];
    }
    printMap(){
        for(let key in this.map){
            console.log(key,this.map[key]);
        }
    }
}
class MyMap<T> {

    items : Array<[string,T]> = [];
    
    setItem(key: string, item: T){ 
       this.items.push([key,item]);
    } 
    getItem(key: string) {
        let value = null;
        this.items.forEach((item)=>{
          if(key === item["0"]) value = item["1"];  
        })
        return value;
    } // should retrieve the value of the provided key
    clear() : void {
        this.items = [];
    } // should remove all key-value pairs
    printMap() : void {
        this.items.forEach((item)=>{
            console.log(...item);
        });
    } // should output key-value pairs
    
}

//The map should be usable like shown below:

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
