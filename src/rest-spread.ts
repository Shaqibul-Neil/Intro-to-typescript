//spread
const friends: string[] = ["abbas", "bakar"];
const schoolFriends: string[] = ["pintu", "rintu", "bantu"];
const collegeFriends: string[] = ["poltu", "boltu"];

friends.push(...schoolFriends);

const user = { name: "neil", phone: "01545121454" };

const otherInfo = { age: 32, hobby: "coding", favColor: "blue" };

const userInfo = { ...user, ...otherInfo };

//rest
const sendInvite = (...friends: string[]) => {
  friends.forEach((f: string) => console.log(`Send Invitation to ${f}`));
};

sendInvite("abul", "kabul", "babul");
