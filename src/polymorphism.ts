/*
class Person {
  getSleep() {
    console.log(`I am a Normal Happy Person.I sleep for 8 hours`);
  }
}
class Student extends Person {
  getSleep() {
    console.log(`I am a Student.I sleep for 7 hours`);
  }
}
class Developer extends Person {
  getSleep() {
    console.log(`I am a Developer.I sleep for 6 hours`);
  }
}

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

const getSleepingHours = (params: Person) => {
  params.getSleep();
};

getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);


class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(
    public h: number,
    public w: number,
  ) {
    super();
  }
  getArea(): number {
    return this.h * this.w;
  }
}

const getArea = (params: Shape) => {
  return params.getArea();
};

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10, 20);

console.log(getArea(shape1));
console.log(getArea(shape2));
console.log(getArea(shape3));
*/
