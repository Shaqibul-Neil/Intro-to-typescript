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


//Explore Enum
//type TRole = "admin" | "editor" | "viewer";

enum TRole {
  Admin = "admin",
  Editor = "editor",
  Viewer = "viewer",
}
const canEdit = (role: TRole) => {
  if (role === TRole.Admin || role === TRole.Editor) return true;
  else false;
};

const isEditPermissible = canEdit(TRole.Admin);
console.log(isEditPermissible);


//As Const assertion alternative of ENUM
const TRole = {
  Admin: "admin",
  Editor: "editor",
  Viewer: "viewer",
} as const;

const canEdit = (role: (typeof TRole)[keyof typeof TRole]) => {
  if (role === TRole.Admin || role === TRole.Editor) return true;
  else false;
};

const isEditPermissible = canEdit(TRole.Admin);
console.log(isEditPermissible);


//Explore conditional type
type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type TRichPeopleVehicles = {
  bike: string;
  car: string;
  ship: string;
};

type TCheckVehicle<T> = T extends keyof TRichPeopleVehicles ? true : false;

type THasBike = TCheckVehicle<"bike">;
type THasTractor = TCheckVehicle<"tractor">;


//Explore mapped types

const arrayOfNum: number[] = [1, 2, 3];
const arrayOfStr: string[] = ["1", "2", "3"];

const arrayOfStrMap: string[] = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStrMap);

type TAreaOfNum = {
  height: number;
  width: number;
};

type THeight = TAreaOfNum["height"];

// type TAreaOfStr = {
//   height: string;
//   width: string;
// };

type TAreaOfStr = {
  [key in keyof TAreaOfNum]: string;
};

//generic
type TArea<T> = {
  [key in keyof T]: T[key];
};

const area1: TArea<{ height: number; width: string }> = {
  height: 50,
  width: "50",
};

//Explore Utility types
const obj: Record<string, unknown> = {};
type TProduct = {
  name: string;
  price: number;
  brand: string;
  color?: string;
  stock: number;
};

type TProductSummary = Pick<TProduct, "name" | "price" | "stock">;

type TProductWithoutStock = Omit<TProduct, "stock">;

type TProductWithColor = Required<TProduct>;
type TOptionalProduct = Partial<TProduct>;
type TReadOnlyProduct = Readonly<TProduct>;
*/

//TASK 1: Product System (Utility Types)

type TProduct = {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
  color?: string;
};

type TProductCard = Pick<TProduct, "name" | "price" | "brand">;
type TProductUpdate = Pick<TProduct, "id"> & Partial<Omit<TProduct, "id">>;
type TProductSafe = Readonly<TProduct>;

//TASK 2: Generic API Wrapper
// Create a generic function:

// Requirements:
// takes any type T
// returns:
// {
//   success: true,
//   data: T
// }

const genericFunction = <T>(value: T): { success: true; data: T } => {
  return {
    success: true,
    data: value,
  };
};

const product = genericFunction({ id: 1, name: "phone" });
console.log(product);
const strings = genericFunction(["a", "b", "c"]);
console.log(strings);

//TASK 3: Constraint System (Real-world)
interface IUser {
  id: number;
  name: string;
}

const updateUser = <T extends IUser>(data: T): T & { updatedAt: string } => {
  return { ...data, updatedAt: new Date().toISOString() };
};

//TASK 4: Key Extractor (keyof mastery)
type TCar = {
  brand: string;
  model: string;
  year: number;
};

const car = {
  brand: "abc",
  model: "hab",
  year: 15,
};

const getValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

getValue(car, "brand");
getValue(car, "year");

//TASK 5: Tuple Builder (advanced generic)
type createPair = <Y>(a: string, b: Y) => [string, Y];

//TASK 6: Mapping Type
//Rules:

// make all values optional BUT keep keys same
// do NOT use Partial directly (build manually using mapped types)

type TTheme = {
  primary: string;
  background: string;
  border: string;
};

type TOptionalTheme<T> = {
  [key in keyof T]?: T[key];
};

//TASK 7: Bonus Challenge
type TApiResponse<T> = {
  status: number;
  data: T;
  error?: string;
};
const wrapResponse = <T>(data: T): TApiResponse<T> => {
  return {
    status: 200,
    data,
  };
};

//Task 9: The Wrapper
type TDataType<T> = T extends any[] ? "Large" : "Small";
type Test1 = TDataType<string[]>;
type Test2 = TDataType<number>;

//Task 8: The "Draft" Mode
interface MyDocument {
  title: string;
  content: string;
  author: string;
}

type TDraft<T> = {
  readonly [key in keyof T]?: T[key];
};

//Task 7: Constant Literal Types
const Colors = {
  Primary: "RED",
  Secondary: "BLUE",
} as const;
type TValidColor = (typeof Colors)[keyof typeof Colors];
const setColor = (c: TValidColor) => {
  console.log(c);
};

//Task 6: The Property Guard
const products = { id: 101, name: "Keyboard", price: 50 };
const getProductProp = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

console.log(getProductProp(products, "price"));

//Task 5: Generic Constraints

const lengthMeasure = <T extends { length: number }>(value: T): number => {
  return value.length;
};
console.log(
  lengthMeasure("hello"),
  lengthMeasure([1, 2, 3]),
  lengthMeasure({ length: 10 }),
);

//Task 4: Type Assertion
let secretValue: unknown = "typescript is awesome";
const upperValue = (secretValue as string).toUpperCase();
console.log(upperValue);

//Task 3: The "Safe" Data Fetcher
type UserResponse = {
  info?: {
    address?: {
      zipCode?: string;
    };
  };
};
const getZipCode = (data: UserResponse): string => {
  return data.info?.address?.zipCode ?? "00000";
};

//Task 2: Merging User Profiles
type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };
type Employee = Person & JobDetails;

const getProfile = (employee: Employee): string => {
  return `Name: ${employee["name"]}, Role: ${employee["role"]}`;
};

//Task 1: The "Optional" Shopping Cart
type CartItem = {
  name: string;
  price: number;
  quantity?: number;
};
const calculateTotal = (cart: CartItem): number => {
  const { price, quantity = 1 } = cart;
  return price * quantity;
};
