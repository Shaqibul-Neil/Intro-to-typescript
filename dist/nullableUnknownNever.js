"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//nullable type
const getUser = (input) => {
    if (input) {
        console.log(`From DB : ${input}`);
    }
    else
        console.log("From DB : All user");
};
//getUser(null);
//unknown type
const discountCalc = (input) => {
    if (typeof input === "number") {
        console.log(input * 0.1);
    }
    else if (typeof input === "string") {
        console.log("str", parseInt(input) * 0.2);
    }
    else
        console.log(input);
};
discountCalc(100);
discountCalc("100 TK");
discountCalc(null);
//void
const throwError = (msg) => {
    console.log(msg);
    throw new Error(msg);
};
//throwError("error");
//# sourceMappingURL=nullableUnknownNever.js.map