//creating alias
type User = {
  name: string;
  age: number;
};
//intersection type
type Role = {
  role: "admin" | "user";
};

//now using two type create a intersection
type UserWithRole = User & Role;

const user1: UserWithRole = {
  name: "neil",
  age: 34,
  role: "admin",
};

const user2: UserWithRole = {
  name: "x",
  age: 24,
  role: "user",
};

//creating Interface basically another way of writing alias
interface IUser {
  name: string;
  age: number;
}
interface IUserWithRole extends IUser {
  role: "admin" | "user";
}
const user3: IUserWithRole = {
  name: "x",
  age: 24,
  role: "user",
};

//primitive data
//type alias
type IsAdmin = boolean;
const isAdmin: IsAdmin = false;

//function as type alias
type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;

//function as interface
interface IAdd {
  (num1: number, num2: number): number;
}
const add2: IAdd = (num1, num2) => num1 + num2;

//array as type alias
type Friends = string[];
const friends: string[] = ["x", "y"];

//array as interface
interface IFriends {
  [index: number]: string;
}
const friends2: IFriends = ["x", "y"];
