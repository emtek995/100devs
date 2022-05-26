//Create an a class and extend it - Can be anything you would like it to be! 

class Animal {
    constructor(name) {
        this._name = name;
    }

    speak() {
        console.log(`${this._name} makes a sound`);
    }
}

class Cat extends Animal {
    constructor(name, breed) {
        super(name);
        this._breed = breed;
    }

    speak() {
        console.log(`${this._name} says meow`);
    }
}