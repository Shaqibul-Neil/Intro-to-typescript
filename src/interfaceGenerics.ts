/*
interface TUser {
  name: string;
  age: number;
}

interface TRole {
  role: "admin" | "user";
}

interface TUserWithRole extends TUser, TRole {}

const user1: TUserWithRole = {
  name: "neil",
  age: 34,
  role: "admin",
};

const user2: TUserWithRole = {
  name: "x",
  age: 24,
  role: "user",
};

console.log(user1, user2);

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;


//Generics in typescript
type GenericArray<T> = Array<T>;

const friends: string[] = ["a", "b", "c"];
const friendsG: Array<string> = ["a", "b", "c"];
const friendsGeneric: GenericArray<string> = [];

const rolls: number[] = [1, 2, 3];
const rollsG: Array<number> = [1, 2, 3];

const eligible: boolean[] = [true, false, true];
const eligibleG: Array<boolean> = [true, false, true];

//for tuple
type TCoords<x, y> = [x, y];
const coordinates: TCoords<string, number> = ["20", 30];
const coordinates2: TCoords<number, number> = [20, 30];

//for array of obj
type TUser = { name: string; age: number };
type GenericObj<T> = Array<T>;
const userList: GenericObj<TUser> = [
  { name: "neil", age: 24 },
  { name: "shaqib", age: 34 },
];

//Generics with interface
interface TDeveloper<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface TSmartWatch {
  heartRate: string;
  stopWatch: boolean;
}

interface TBrandWatch extends TSmartWatch {
  callOption: boolean;
  calculator: boolean;
  aiFeature: boolean;
}

interface TBike {
  brand: string;
  engineCapacity: string;
}

const poorDeveloper: TDeveloper<TSmartWatch, TBike> = {
  name: "Poor",
  salary: 10000,
  device: {
    brand: "lenovo",
    model: "12EC",
    releasedYear: "2004",
  },
  smartWatch: {
    heartRate: "84",
    stopWatch: true,
  },
  bike: {
    brand: "yamaha",
    engineCapacity: "200cc",
  },
};

const richDeveloper: TDeveloper<TBrandWatch> = {
  name: "Rich",
  salary: 100000,
  device: {
    brand: "HP",
    model: "45W",
    releasedYear: "2026",
  },
  smartWatch: {
    heartRate: "84",
    stopWatch: true,
    callOption: true,
    aiFeature: true,
    calculator: true,
  },
};

//Generics with function

type TGenericArray<T> = (value: T) => Array<T>;

const createArrayStr: TGenericArray<string> = (value: string) => [value];

const createArrayObj: TGenericArray<{ id: number; name: string }> = (value: {
  id: number;
  name: string;
}) => [value];

console.log(createArrayStr("hello"));
console.log(createArrayObj({ id: 123, name: "neil" }));

const createGeneric = <T>(value: T) => [value];
const createArrayNum = createGeneric(222);
console.log(createArrayNum);

//Tuple
const createArrayTuple = <X, Y>(param1: X, param2: Y): [X, Y] => [
  param1,
  param2,
];

const createTuple = createArrayTuple(3, "4");
console.log(createTuple);

const student1 = {
  id: 123,
  name: "x",
  hasPen: true,
};
const student2 = {
  id: 123,
  name: "y",
  hasCar: true,
  isMarried: true,
};

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next level",
    ...studentInfo,
  };
};

const response1 = addStudentToCourse(student1);
const response2 = addStudentToCourse(student2);
console.log({ response1, response2 });


//Constraint in typescript
interface IStudentInfo {
  id: number;
  name: string;
}

const student1 = {
  id: 123,
  name: "x",
  hasPen: true,
};
const student2 = {
  id: 123,
  name: "y",
  hasCar: true,
  isMarried: true,
};

const student3 = {
  id: 1230,
  name: "y0",
  hasWatch: true,
};

const addStudentToCourse = <T extends IStudentInfo>(
  studentInfo: T,
): T & { course: string } => {
  return {
    course: "Next level",
    ...studentInfo,
  };
};

const response1 = addStudentToCourse(student1);
const response2 = addStudentToCourse(student2);
const response3 = addStudentToCourse(student3);
console.log({ response1, response2 });
*/

//keyOf constraint with generics
type TRichPeopleVehicles = {
  car: string;
  bike: string;
  cng: string;
};

type TMyVehicles1 = keyof TRichPeopleVehicles;
const myVehicles: TMyVehicles1 = "bike";

interface IUser {
  id: number;
  name: string;
  address: { city: string };
}

const user: IUser = {
  id: 222,
  name: "neil",
  address: {
    city: "dhaka",
  },
};
// const myName = user.name;
// const myName2 = user["name"];

const getPropertyFromObj = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

const product = {
  brand: "hp",
};

const student = {
  id: 123,
  class: "Four",
};

const result = getPropertyFromObj(user, "name");
const result2 = getPropertyFromObj(product, "brand");
const result3 = getPropertyFromObj(student, "class");
console.log(result);
