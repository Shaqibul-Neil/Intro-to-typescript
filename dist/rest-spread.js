"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//spread
const friends = ["abbas", "bakar"];
const schoolFriends = ["pintu", "rintu", "bantu"];
const collegeFriends = ["poltu", "boltu"];
friends.push(...schoolFriends);
const user = { name: "neil", phone: "01545121454" };
const otherInfo = { age: 32, hobby: "coding", favColor: "blue" };
const userInfo = { ...user, ...otherInfo };
//rest
const sendInvite = (...friends) => {
    friends.forEach((f) => console.log(`Send Invitation to ${f}`));
};
sendInvite("abul", "kabul", "babul");
//# sourceMappingURL=rest-spread.js.map