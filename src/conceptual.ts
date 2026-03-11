//tuple--> pattern match
//let user: [string, number] = ["Shaqib", 34];

//****************************************** */

//enum-->enumeration-->fixed value constant, multiple value
//roles--> customer, seller, admin, superAdmin

// enum TrafficLight {
//   RED,
//   YELLOW,
//   GREEN,
// }
// enum ROLE {
//   ADMIN,
//   SUPERADMIN,
// }
// if (ROLE.ADMIN === "ADMIN") {
// }
// let signal: TrafficLight = TrafficLight.RED;

// console.log(typeof TrafficLight);
// console.log(signal);

//****************************************** */
// function greet(): void {
//   console.log("good morning");
// }
// //greet();

// function add(a: number, b: number): number {
//   return a + b;
// }

//****************************************** */

// function loop(): never {
//   while (true) {
//     console.log("forever");
//   }
// }
// let box: unknown = "hello";
// console.log(typeof box);
// if (typeof box === "string") console.log(box.toUpperCase());
// box = 3;
// console.log(typeof box);
// if (typeof box === "string") console.log(box.toUpperCase());
// else console.log("number----");

//****************************************** */

//Union(a or b) & Intersection(a & b)

// let data: string | number;
// data = "hello";
// data = 5;

// type TPersonName = { name: string };
// type TPersonAge = { age: number };

// type TPerson = TPersonName & TPersonAge;
// let person: TPerson = {
//   name: "Shaqib",
//   age: 34,
// };

//****************************************** */
//type alias

// type TStdRoll = number;

// let stdRoll: TStdRoll = 1;
// let stdName: string = "Shaqibul";

//****************************************** */
//generic--syntax
// function fName<T>(value: T): T {
//   return value;
// }
//fName<T>()
// function greet<T>(value: T): T {
//   return value;
// }
// let result = greet<string>("GM");
// let result2 = greet<number>(10);
// console.log(result, result2);
// const getFirst = <T>(arr: T[]): T | undefined => {
//   return arr[0];
// };
// let num = [1, 2, 3];
// let name = ["Rifat", "Neil"];

// console.log(getFirst<number>(num));
// console.log(getFirst<string>(name));

//****************************************** */
//extend
// function length<T extends { length: number }>(value: T): void {
//   console.log(value.length);
// }
// let name = ["Rifat", "Neil"];
// length([10, 2]);
// length("Neil");

//****************************************** */
//Rest spread

// function add(...num: number[]): number {
//   console.log(num);
//   return num.reduce((a, b) => a + b, 0);
// }
// console.log(add(5));
