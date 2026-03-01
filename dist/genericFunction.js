"use strict";
// const createArrayString = (value: string) => [value];
Object.defineProperty(exports, "__esModule", { value: true });
// const createArrayNumber = (value: number) => [value];
// const createArrayObject = (value: { id: number; name: string }) => {
//   return [value];
// };
const createArrayGeneric = (value) => {
    return [value];
};
const arrString = createArrayGeneric("apple");
const arrNumber = createArrayGeneric(15);
const arrObject = createArrayGeneric({ id: 5, name: "steve" });
//tuple
const createArrayTuple = (param1, param2) => {
    return [param1, param2];
};
const createArrayTupleGeneric = (param1, param2) => {
    return [param1, param2];
};
const res1Tuple = createArrayTupleGeneric("neil", 45);
const res2 = createArrayTupleGeneric(45, { name: "neil", id: 5 });
//
const addStudentToCourse = (studentInfo) => {
    return {
        course: "Next level",
        ...studentInfo,
    };
};
const student1 = {
    id: 123,
    name: "x",
    hasPen: true,
};
const student2 = {
    id: 123,
    name: "y",
    hasCar: true,
    isMarried: true,
};
const response1 = addStudentToCourse(student1);
const response2 = addStudentToCourse(student2);
console.log({ response1, response2 });
//# sourceMappingURL=genericFunction.js.map