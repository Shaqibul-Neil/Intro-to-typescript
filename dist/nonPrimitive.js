"use strict";
//Common -> array, object
//TS Primitives or reference type: class, interface, type alias, enam, tuple
Object.defineProperty(exports, "__esModule", { value: true });
// let bazarList: string[] = ["eggs", "potato", "fish"];
// bazarList.push("12");
//if i want both number and string in an array
let bazarList = ["eggs", 12, "potato", "fish"];
bazarList.push(12);
//tuple --> when i fix how many elements will be in an array-->must maintain pattern
let coordinates = [20, 30];
let couple = ["husband", "wife"];
let nameAndRoll = ["shaqibul", 1];
//nameAndRoll[0] = 45; //throws error
let destination = ["dhaka", "ctg", 6];
//reference type : object
//implicit
// const user = {
//   firstName: "Shaqibul",
//   middleName: "Islam",
//   lastName: "Mabiu",
// };
//explicit
// const user: {
//   organization: "Programming Hero"; //value fixed -->literal type
//   firstName: string;
//   middleName?: string; //optional type
//   lastName: string;
//   isMarried: boolean;
// } = {
//   organization: "Programming Hero",
//   firstName: "Shaqibul",
//   lastName: "Mabiu",
//   isMarried: false,
// };
// console.log(user);
//another way
const user = {
    organization: "Programming Hero",
    firstName: "Shaqibul",
    lastName: "Mabiu",
    isMarried: false,
};
// console.log(user);
//tuple
let tuple = ["av", 1];
//enum--> enumeration
// enum TrafficLight {
//   RED, //Red
//   YELLOW,
//   GREEN,
// }
// enum ROLE {
//   Admin,
//   SuperAdmin,
// }
//let signal: TrafficLight = TrafficLight.BLUE;
//if(ROLE.Admin === 'Admin')
//let signal: TrafficLight = TrafficLight.RED;
//if(signal ===)
//console.log(signal);
//any --> disables the type
let box = "hello";
box = 5;
//void -> when function doesn't return anything
const greet = () => {
    console.log("Good Morning");
};
greet();
function add(a, b) {
    return a + b;
}
//# sourceMappingURL=nonPrimitive.js.map