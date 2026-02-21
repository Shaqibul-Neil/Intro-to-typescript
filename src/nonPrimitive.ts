//Common -> array, object
//TS Primitives or reference type: class, interface, type alias, enam, tuple

// let bazarList: string[] = ["eggs", "potato", "fish"];
// bazarList.push("12");

//if i want both number and string in an array
let bazarList: (string | number)[] = ["eggs", 12, "potato", "fish"];
bazarList.push(12);

//tuple --> when i fix how many elements will be in an array-->must maintain pattern
let coordinates: [number, number] = [20, 30];
let couple: [string, string] = ["husband", "wife"];

let nameAndRoll: [string, number] = ["shaqibul", 1];
//nameAndRoll[0] = 45; //throws error
let destination: [string, string, number] = ["dhaka", "ctg", 6];

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
const user: {
  readonly organization: string; //access modifier
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming Hero",
  firstName: "Shaqibul",
  lastName: "Mabiu",
  isMarried: false,
};

// console.log(user);
