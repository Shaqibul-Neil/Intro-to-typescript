"use strict";
/*
const arrayOfNum: number[] = [1, 2, 3];
const arrayOfStr: string[] = ["1", "2", "3"];

const arrayOfStrUsingMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStrUsingMap);

type AreaOfNum = {
  height: number;
  width: number;
};
// type AreaOfStr = {
//   height: string;
//   width: string;
// };

//type height = AreaOfNum["height"];

//mapped
type AreaOfStr = {
  //[key in "height" | "width"]: string;
  [key in keyof AreaOfNum]: string;
};

type AreaOfBoo = {
  //[key in "height" | "width"]: boolean;
  [key in keyof AreaOfNum]: boolean;
};

//generic
// type Area<T> = {
//   [key in keyof T]: string;
// };

//dynamic generic

type Area<T> = {
  [key in keyof T]: T[key];

  //key>> height
  //key>>width
  //t[key] = height >> type of height
  //{height: number; width: string}['height'] = number
};

//T={height: number; width: string}

const area1: Area<{ height: number; width: string }> = {
  height: 50,
  width: "50",
};
 */
Object.defineProperty(exports, "__esModule", { value: true });
const area1 = {
    height: 5,
    width: "5",
};
//# sourceMappingURL=mappedType.js.map