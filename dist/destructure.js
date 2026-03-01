"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 1,
    name: {
        firstName: "neil",
        lastName: "juneja",
    },
    gender: "male",
    favColor: "blue",
};
const { name: { firstName: myFirstName }, } = user;
//console.log(myFirstName);
const schoolFriends = ["pintu", "rintu", "bantu"];
const [, mybest] = schoolFriends;
console.log(mybest);
//# sourceMappingURL=destructure.js.map