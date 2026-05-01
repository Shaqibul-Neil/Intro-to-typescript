"use strict";
//set of fixed string literal ke ek jaigai rakhe
Object.defineProperty(exports, "__esModule", { value: true });
// type UserRoles = "admin" | "editor" | "viewer";
//enum die likhbo
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "admin";
    UserRoles["Editor"] = "editor";
    UserRoles["Viewer"] = "viewer";
})(UserRoles || (UserRoles = {}));
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor)
        return true;
    return false;
};
const isEditPermissible = canEdit(UserRoles.Admin);
//console.log(isEditPermissible);
var Status;
(function (Status) {
    Status["Pending"] = "pending";
    Status["Completed"] = "completed";
})(Status || (Status = {}));
const isDone = (status) => {
    return status === Status.Completed
        ? "---------Done---------"
        : "----------working-----------";
};
console.log(isDone(Status.Pending));
//# sourceMappingURL=enum.js.map