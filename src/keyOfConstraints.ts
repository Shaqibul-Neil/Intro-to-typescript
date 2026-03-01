//keyOf :type operator
type RichPeopleVehicles = {
  car: string; //key:value
  bike: string;
  cng: string;
};

type MyVehicles1 = "bike" | "cng" | "cng";
type MyVehicles2 = keyof RichPeopleVehicles;

// const myVehicle: MyVehicles2 = "bike";
// const myVehicle: MyVehicles2 = "ship";
// console.log(myVehicle);

//key of constraints

type USER = {
  id: number;
  name: string;
  address: { city: string };
};
const user: USER = {
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
const getPropertyFromObject = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

//const result = getPropertyFromObject(user, "address");
//console.log(result);

const result2 = getPropertyFromObject(product, "brand");
console.log(result2);

const result3 = getPropertyFromObject(student, "class");
console.log(result3);
