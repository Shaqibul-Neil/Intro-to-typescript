type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contact: string;
  address: {
    division: string;
    district: string;
    thana: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Neil",
    lastName: "Juneja",
  },
  gender: "male",
  contact: "01784545454",
  address: {
    division: "Dhaka",
    district: "Dhaka",
    thana: "Sher-e-Bangla Nagar",
  },
};

const user2: User = {
  id: 123,
  name: {
    firstName: "Shaqibul",
    lastName: "Islam",
  },
  gender: "male",
  contact: "017844532535",
  address: {
    division: "Dhaka",
    district: "Dhaka",
    thana: "Sher-e-Bangla Nagar",
  },
};

type IsAdmin = true;
const isAmin: IsAdmin = true;

type Name = string;
const myName: Name = "123";

//type alias in function
type AddFunc = (num1: number, num2: number) => number;
const add: AddFunc = (num1, num2) => num1 + num2;
