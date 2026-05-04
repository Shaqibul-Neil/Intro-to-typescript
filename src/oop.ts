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
/*
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

*/

//Inheritance, the 1st pilar of OOP

/*
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
*/

//Type guard using typeof and in
//in, typeof

//TYPEOF GUARD
/*
type TAlpha = number | string;
const add = (param1: TAlpha, param2: TAlpha) => {
  return typeof param1 === "number" && typeof param2 === "number"
    ? param1 + param2
    : param1.toString() + param2.toString();
};

console.log(add("5", 2));
console.log(add(5, 2));
console.log(add(5, "2"));

//IN GUARD
type TNormalUser = {
  name: string;
};
type TAdminUser = {
  name: string;
  role: "admin";
};
const getUserInfo = (user: TNormalUser | TAdminUser) => {
  if ("role" in user) {
    console.log(`This ${user.name} is ${user.role}`);
  }
  return console.log(`This ${user.name} is normal user`);
};
getUserInfo({ name: "normal", role: "admin" });
getUserInfo({ name: "normalRole nai" });
*/

//Type guard using instance of / type narrowing
class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}

  getSleep(num: number) {
    console.log(`${this.name} sleeps daily for ${num} hours`);
  }
}

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }
  doStudy(num: number) {
    console.log(`${this.name} studies daily for ${num} hours`);
  }
}

class Teacher extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }

  takeClass(num: number) {
    console.log(`${this.name} takes class daily for ${num} hours`);
  }
}

//function guard
const isStudent = (user: Person) => {
  return user instanceof Student;
};
const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else user.getSleep(8);
};

//creating instance
const student1 = new Student("Student", 34);
const teacher1 = new Teacher("Teacher", 34);
const person1 = new Person("Person", 34);

getUserInfo(person1);
getUserInfo(teacher1);
getUserInfo(student1);
