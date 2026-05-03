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

*/
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
  bike: X;
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
  bike: null,
};
