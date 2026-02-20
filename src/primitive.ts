//Common: String, Boolean, Number, Undefined, Null
//TS Primitives: any, void, never, unknown

let userName: string = "Neil";
let userId: number = 123456;
let isAdmin = false;
let y;
let x: undefined = undefined;

//'any' data - type: allows any type of data
let z: any = 123;
z = "abc";

//'unknown' -- use instead of any
let value: unknown = "hello";
console.log(typeof value);
