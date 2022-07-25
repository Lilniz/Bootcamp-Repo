// TODO: Import the parent class
const Vehicle = require("./vehicle");

// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor(id, color, passengers) {
    super(id, 4, "Beep");
    this.color = color;
    this.carPassengers = carPassengers;
  };
  useHorn() {
    this.sound = 'Meep! Beep!';
    console.log(this.sound);
  };
  checkPassengers() {
    const len = this.carPassengers.length;
    if (len < 4) {
      console.log(`There is ${4 - len} seat/s remaining.`)
    } else {
      console.log("This car only seats 4 people. You have too many passengers!")
    }
  }
}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  // 'Lao-Tzu',
  // 'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
