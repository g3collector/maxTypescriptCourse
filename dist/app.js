// Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.
// Let's keep it simple and only add the following methods to the Map:
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.items = [];
    }
    MyMap.prototype.setItem = function (key, item) {
        this.items.push([key, item]);
    };
    MyMap.prototype.getItem = function (key) {
        var value = null;
        this.items.forEach(function (item) {
            if (key === item["0"])
                value = item["1"];
        });
        return value;
    }; // should retrieve the value of the provided key
    MyMap.prototype.clear = function () {
        this.items = [];
    }; // should remove all key-value pairs
    MyMap.prototype.printMap = function () {
        this.items.forEach(function (item) {
            console.log.apply(console, item);
        });
    }; // should output key-value pairs
    return MyMap;
}());
//The map should be usable like shown below:
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
//# sourceMappingURL=app.js.map