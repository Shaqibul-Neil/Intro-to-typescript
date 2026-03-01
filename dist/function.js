"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = function (num1, num2) {
    return num1 + num2;
};
add(2, 4);
const sum = (num1, num2) => num1 + num2;
sum(2, 2);
//Object  ==> function  called method
const poorUser = {
    name: "neil",
    balance: 0,
    addBalance(value) {
        const totalBalance = this.balance + value;
        return totalBalance;
    },
};
poorUser.addBalance(5);
//callback function
const arr = [1, 4, 6];
const squaredArr = arr.map((el) => el * el);
//# sourceMappingURL=function.js.map