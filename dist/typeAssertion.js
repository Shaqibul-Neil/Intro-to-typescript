"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = "25";
anything;
const kgToGmConverter = (input) => {
    if (typeof input === "number")
        return input * 1000;
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `${Number(value) * 1000}`;
    }
};
const result1 = kgToGmConverter(2);
const result2 = kgToGmConverter("29 kg");
console.log({ result1, result2 });
try {
}
catch (error) {
    console.log(error.message);
}
//# sourceMappingURL=typeAssertion.js.map