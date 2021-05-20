"use strict";

var nameVar = "Josh";
nameVar = "Flint";
console.log("nameVar", nameVar);

var nameLet = "Jen";
nameLet = "Ken";
console.log(nameLet);

var nameConst = "Frank";
console.log(nameConst);

// Block scoping

var fullName = "Joshua Reed";

if (fullName) {
    var _firstName = fullName.split(" ")[0];
    console.log(_firstName);
}

console.log(firstName);
