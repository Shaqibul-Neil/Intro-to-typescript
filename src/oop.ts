//Class + Object
// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   //method
//   makeSound() {
//     console.log(`${this.name}, the ${this.species} says ${this.sound}`);
//   }
// }

//Parameter Property
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}

  //method
  makeSound() {
    console.log(`${this.name}, the ${this.species} says ${this.sound}`);
  }
}

const Dog = new Animal("Tom", "dog", "Ghew ghew");

const Cat = new Animal("mimi", "cat", "meow meow ");

// console.log(Dog.name);
// Dog.makeSound();
// console.log(Dog.species);
// console.log(Dog.sound);

//Inheritance, the 1st pilar of OOP
class Parent {
  constructor(
    public name: string,
    public age: number,
    public address: string,
  ) {}

  getSleep(numOfHours: number) {
    console.log(`${this.name} is sleeping for ${numOfHours} hours`);
  }
}
//now new property and method
class Student extends Parent {}

const student1 = new Student("Shaqib", 34, "Dhaka");
student1.getSleep(8);

//if new property and method
class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  getTeach(numOfHours: number) {
    console.log(`${this.name} is taking class for ${numOfHours} hours`);
  }
}
const teacher1 = new Teacher("Neil", 34, "Dhaka", "Teacher");

teacher1.getTeach(10);
