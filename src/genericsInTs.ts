//dynamically generalize

type GenericArray<T> = Array<T>;

// const friends: string[] = ["a", "b", "c"]; or
const friends: GenericArray<string> = ["a", "b", "c"];
//const rolls: number[] = [1, 2, 3]; or
//const rolls: Array<number> = [1, 2, 3];
const rolls: GenericArray<number> = [1, 2, 3];
//const eligible: boolean[] = [true, false, true]; or
const eligible: GenericArray<boolean> = [true, false, true];

// type GenericValue<value> = Array<value>;
// const course: GenericValue<string> = ["react", "next"];
// const timeLine: GenericValue<number> = [5, 6, 7];

//tuple
type Coords<X, Y> = [X, Y];
const coords1: Coords<number, number> = [20, 30];
const coords2: Coords<string, number> = ["20", 30];
const coords3: Coords<string, string> = ["20", "30"];

//array of obj
const userList: GenericArray<{ name: string; age: number }> = [
  { name: "neil", age: 24 },
  { name: "shaqib", age: 34 },
];
