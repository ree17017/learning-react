class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return `Hi. I am ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Students extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += `Their major is ${this.major}. `;
        }
        return description;
    }
}

class Travler extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }

    getGretting() {
        let gretting = super.getGretting();
        if (this.home) {
            return (gretting += ` I'm visiting from ${this.home}`);
        }
        return gretting;
    }
}

const me = new Students("Joshua", 38, "Software Engineer");
console.log(me);
console.log(me.getGretting());
console.log(me.getDescription());
console.log(me.hasMajor());

const they = new Students();
console.log(they.getGretting());
console.log(they.getDescription());
console.log(they.hasMajor());

const who = new Travler("Steeltar", 25, "Modesto");
console.log(who.getGretting());

const anyone = new Travler("Zour", 25);
console.log(anyone.getGretting());
