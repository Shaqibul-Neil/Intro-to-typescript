"use strict";
//as const assertion
// enum UserRoles {
//   Admin = "admin",
//   Editor = "editor",
//   Viewer = "viewer",
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const UserRoles = {
//   Admin: "Admin",
//   Editor: "Editor",
//   Viewer: "Viewer",
// } as const;
/**
 *
 * UserRoles = {
 readonly Admin: "admin",
  readonly Editor: "editor",
  readonly Viewer: "viewer",
}
 *  1. type of operator
    2.key of operator

    typeof UserRoles
    {
  Admin: "admin",
  Editor: "editor",
  Viewer: "viewer",
}

keyof typeof UserRoles -->string literal create korbe
"admin" | "editor" |"viewer"
  */
// const canEdit = (role: keyof typeof UserRoles) => {
//   if (role === UserRoles.Admin || role === UserRoles.Editor) return true;
//   return false;
// };
// const isEditPermissible = canEdit(UserRoles.Admin);
const UserRoles = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viewer: "VIEWER",
};
/**
 *
 * typeof UserRoles
    {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
}
  keyof typeof UserRoles eta likhle pai
  'Admin'|'Editor'|'Viewer'
now-->
  'ADMIN'|'EDITOR'|'VIEWER'
  UserRoles['Admin']= 'ADMIN'

 typeof UserRoles [keyof typeof UserRoles] eta likhle
  'ADMIN'|'EDITOR'|'VIEWER'
 *
 */
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor)
        return true;
    return false;
};
const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);
//# sourceMappingURL=asConst.js.map