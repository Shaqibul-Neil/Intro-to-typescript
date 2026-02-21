const user = {
  id: 1,
  name: {
    firstName: "neil",
    lastName: "juneja",
  },
  gender: "male",
  favColor: "blue",
};

const {
  name: { firstName: myFirstName },
} = user;

//console.log(myFirstName);

const schoolFriends: string[] = ["pintu", "rintu", "bantu"];

const [, mybest] = schoolFriends;
console.log(mybest);
