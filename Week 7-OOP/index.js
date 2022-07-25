// These two, are the same thing
// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// User.prototype.printAge = function () {
//     console.log(this.age);
// }


// As this!
// class User {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     printAge() {
//         console.log(this.name);
//     }
//     static defineHuman(obj) {
//         return console.log('Humans are cool')
//     }
//     static capitalize(str) {
//         return str[0].toUpperCase() + str.slice(1); // slices the array and 
//     }
// }

// Power of the 'class'. Super easy to create these methods. Just write the name of the method () {}, and you're good to start. 
// The static method cannot reference a future object within it. 'This' does not exist in the static method.

// console.log(User.defineHuman('first string'))
// console.log(User.capitalize('some string'))

// const lee = new User('Lee', 30);

// console.log(lee)

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     printAge() {
//         console.log(this.name)
//     };
// };

// MathWiz.prototype.sum = function(...nums) {
//     nums.reduce((summed,n) => summed += n, 0)
// }

// class MathWiz {
//     sum(...nums) {
//         return nums.reduce((summed, n) => summed += n, 0);
//     }
// }

// const wiz = new MathWiz('best');
// const summed = wiz.sum(5, 10, 30, 7, 2);
// console.log(summed)

class Animal {
    constructor() {
        this.legs = 4;
    }
    eat() {
        console.log('eating something')
    }
}

class Bear extends Animal {
    constructor(noise) {
        super();
        this.noise = noise;
    }
}

class Fox extends Animal {
    constructor(noise) {
        super();
        this.noise = noise;
    }
}

const baloo = new Bear('rawwrrr');
const robin = new Fox('screeee');

console.log(baloo, robin);
baloo.eat()
