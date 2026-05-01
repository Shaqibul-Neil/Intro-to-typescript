"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 222,
    name: "neil",
    address: {
        city: "dhaka",
    },
};
const product = {
    brand: "hp",
};
const student = {
    id: 123,
    class: "Four",
};
// const myName = user["name"];
// console.log(myName);
//using the manual
// const getPropertyFromObject = (obj: USER, key: "id" | "name" | "address") => {
//   return obj[key];
// };
//using key of
// const getPropertyFromObject = (obj: USER, key: keyof USER) => {
//   return obj[key];
// };
//for all obj
const getPropertyFromObject = (obj, key) => {
    return obj[key];
};
//const result = getPropertyFromObject(user, "address");
//console.log(result);
const result2 = getPropertyFromObject(product, "brand");
console.log(result2);
const result3 = getPropertyFromObject(student, "class");
console.log(result3);
//# sourceMappingURL=keyOfConstraints.js.map