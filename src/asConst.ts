//as const assertion
// enum UserRoles {
//   Admin = "admin",
//   Editor = "editor",
//   Viewer = "viewer",
// }

const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

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

const canEdit = (role: keyof typeof UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) return true;
  return false;
};

const isEditPermissible = canEdit(UserRoles.Admin);
