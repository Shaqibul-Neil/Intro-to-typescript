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
//generic
