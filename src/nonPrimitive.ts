//Common -> array, object
//TS Primitives: class, interface, type alias, enam, tuple

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
