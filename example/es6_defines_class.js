import React from 'react'
import ReactDOM from 'react-dom'

class Animal {
    // all class variables are in constructor
    constructor(name, age) {
        this.name = name,
        this.age = age;
    }

    // static properties only prototype can visit, not belongs to any instance, example: Animal.canSpeak, Dog.canSpeak, Cat.canFly
    static canSpeak = true;
    static canFly = false;

    // defines method
    speak() {
        alert('Animal speak()');
    }
}

class Dog extends Animal {
    // subclass polymorphism
    speak() {
        alert(this.name + " barking...");
    }
}

class Cat extends Animal {
    // subclass polymorphism
    speak() {
        alert(this.name + " meowing...");
    }
}

// Create objects
const mocha = new Dog('Mocha', '4');
const carfield = new Cat('Carfield', '6');

console.log(mocha);
console.log(carfield);
ReactDOM.render(<div>
                    {mocha.speak()}
                    {carfield.speak()}
                </div>, document.getElementById('app'));