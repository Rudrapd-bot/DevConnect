// Date: 12-07-2025

// Concept - class
class Car {
    brand;
    speed;
    type;
    constructor(brand, speed, type) {
        this.brand = brand;
        this.speed = speed;
        this.type = type;
    }

    // displayInfo() {
    //     console.log(`Brand: ${this.brand}, Speed: ${this.speed}km/h, Type: ${this.type}`);
    // }
}

// Creating an object (instance) of the Car class
const car1 = new Car("Toyota", 180, "Sedan");
const car2 = new Car("BMW", 220, "SUV");
const car3 = new Car("Honda", 200, "Hatchback");
const car4 = new Car("Tata", 160, "Compact");
const car5 = new Car("Mini", 210, "Convertible Cooper");

// Calling the method
// car1.displayInfo();
// car2.displayInfo();
// car3.displayInfo();
// car4.displayInfo();
// car5.displayInfo();
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4)
console.log(car5);
