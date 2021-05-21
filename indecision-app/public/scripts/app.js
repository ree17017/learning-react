"use strict";

// const square = function (x) {
//     return x * x;
// };

// const suareArrow = (x) => x * x;

// console.log(square(8));

// console.log(suareArrow(8));

var getFirstName = function getFirstName(firstName) {
    return firstName.split(" ")[0];
};

console.log(getFirstName("Joshua Reed"));

var add = function add(a, b) {
    return a + b;
};

console.log(add(1, 2));

var user = {
    name: "Josh",
    cities: ["Turlock", "Modesto", "Santaquin"],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + " has livined in " + city;
        });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        var numbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.numbers;
        var multiplyBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.multiplyBy;

        return this.numbers.map(function (num) {
            return num * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
