var nameVar = "Josh";
nameVar = "Flint";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Ken";
console.log(nameLet);

const nameConst = "Frank";
console.log(nameConst);

// Block scoping

var fullName = "Joshua Reed";

if (fullName) {
    let firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);
