"use strict";
//Union-- |
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === "admin")
        return "admin dashboard";
    else if (role === "user")
        return "user dashboard";
    else
        return "no dashboard";
};
//getDashboard("citizen");
getDashboard("user");
const chowdhury = {
    id: "123",
    name: "Chowdhury",
    phone: "02154121",
    designation: "manager",
    teamSize: 5,
};
//# sourceMappingURL=unionIntersection.js.map