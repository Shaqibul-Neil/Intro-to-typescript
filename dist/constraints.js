"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//constrain: strict rules deya
const addStudentToCourse = (studentInfo) => {
    return { course: "Next level", ...studentInfo };
};
const student1 = {
    id: 5,
    name: "neil",
    year: 2026,
    hasBike: false,
};
const student2 = {
    id: 6,
    name: "shaqib",
    year: 2036,
    hasBike: true,
    hasCar: true,
    isRich: true,
    hasWife: true,
};
const student3 = { hasWatch: true };
const response1 = addStudentToCourse(student1);
const response2 = addStudentToCourse(student2);
const response3 = addStudentToCourse(student3);
console.log({ response1, response2 });
//# sourceMappingURL=constraints.js.map