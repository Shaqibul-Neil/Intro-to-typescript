//set of fixed string literal ke ek jaigai rakhe
// type UserRoles = "admin" | "editor" | "viewer";
//enum die likhbo
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "admin";
    UserRoles["Editor"] = "editor";
    UserRoles["Viewer"] = "viewer";
})(UserRoles || (UserRoles = {}));
var canEdit = function (role) {
    if (role === UserRoles.Admin || role === UserRoles.Editor)
        return true;
    return false;
};
var isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);
