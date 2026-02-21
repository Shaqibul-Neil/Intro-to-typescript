const add = function (num1: number, num2: number): number {
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
