type TUser = {
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

const user1: TUser = {
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

const user2: TUser = {
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

type TIsAdmin = true;
const isAmin: TIsAdmin = true;

type TName = string;
const myName: TName = "123";

//type alias in function
type TAddFunc = (num1: number, num2: number) => number;
const add: TAddFunc = (num1, num2) => num1 + num2;
