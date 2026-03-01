"use strict";
//? -- ternary : conditional
//?? -- nullish coalescing works only for null and undefined
//?. -- optional chaining
Object.defineProperty(exports, "__esModule", { value: true });
const userTheme = undefined;
const selectedTheme = userTheme ?? "light";
//console.log(selectedTheme);
const isAuthenticated = "";
const resultWithNullish = isAuthenticated ?? "You r guest";
const resultWithTernary = isAuthenticated ? isAuthenticated : "You r guest";
//console.log({ resultWithNullish }, { resultWithTernary });
const user = {
    address: {
        city: "Dhaka",
    },
};
const postalCode = user?.address?.postalCode;
console.log(postalCode);
//# sourceMappingURL=questionMark.js.map