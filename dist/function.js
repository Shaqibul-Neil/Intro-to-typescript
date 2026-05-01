"use strict";
/*const add = function (num1: number, num2: number): number {
  return num1 + num2;
};
add(2, 4);

const sum = (num1: number, num2: number): number => num1 + num2;

sum(2, 2);

//Object  ==> function  called method
const poorUser = {
  name: "neil",
  balance: 0,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};

poorUser.addBalance(5);

//callback function
const arr: number[] = [1, 4, 6];
const squaredArr = arr.map((el: number): number => el * el);


const add = (num1: number, num2: number): number => num1 + num2;

console.log(add(2, 4));
console.log(add(3, 4));

const user: {
  readonly organization: string;
  firstName: string;
  middleName: string;
  lastName: string;
  isMarried: boolean;
  balance: number;
  finance(value: number): number;
  print(): void;
} = {
  organization: "Programming Hero",
  firstName: "Shaqibul",
  middleName: "Islam",
  lastName: "Mabiu",
  isMarried: false,
  balance: 10,
  finance(value: number = 0): number {
    return this.balance + value;
  },
  print() {
    console.log(this.finance(5));
  },
};

user.print();
*/
Object.defineProperty(exports, "__esModule", { value: true });
//callback function
const arr = [1, 4, 6];
const squaredArr = arr.map((el) => el * el);
console.log(squaredArr);
//# sourceMappingURL=function.js.map