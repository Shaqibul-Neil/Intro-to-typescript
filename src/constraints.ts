//constrain: strict rules deya
type Info = { id: number; name: string };

const addStudentToCourse = <T extends Info>(studentInfo: T) => {
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
const student3 = { id: 4, name: "a", hasWatch: true };

const response1 = addStudentToCourse(student1);
const response2 = addStudentToCourse(student2);
const response3 = addStudentToCourse(student3);
console.log({ response1, response2, response3 });
