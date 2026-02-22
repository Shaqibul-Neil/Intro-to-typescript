//Union-- |

type UserRole = "admin" | "user" | "guest";

const getDashboard = (role: UserRole) => {
  if (role === "admin") return "admin dashboard";
  else if (role === "user") return "user dashboard";
  else return "no dashboard";
};

//getDashboard("citizen");

getDashboard("user");

//intersection-- &
type Employee = {
  id: string;
  name: string;
  phone: string;
};
type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const chowdhury: EmployeeManager = {
  id: "123",
  name: "Chowdhury",
  phone: "02154121",
  designation: "manager",
  teamSize: 5,
};
