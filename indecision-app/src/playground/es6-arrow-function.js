// const square = function (x) {
//     return x * x;
// };

// const suareArrow = (x) => x * x;

// console.log(square(8));

// console.log(suareArrow(8));

const getFirstName = (firstName) => firstName.split(" ")[0];

console.log(getFirstName("Joshua Reed"));

const add = function (a, b) {
    return a + b;
};

console.log(add(1, 2));

const user = {
    name: "Josh",
    cities: ["Turlock", "Modesto", "Santaquin"],
    printPlacesLived() {
        return this.cities.map(
            (city) => this.name + " has livined in " + city
        );
    },
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply(numbers = this.numbers, multiplyBy = this.multiplyBy) {
        return this.numbers.map((num) => num * this.multiplyBy);
    },
};

console.log(multiplier.multiply());
