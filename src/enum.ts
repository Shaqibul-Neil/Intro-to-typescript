//set of fixed string literal ke ek jaigai rakhe

// type UserRoles = "admin" | "editor" | "viewer";

//enum die likhbo
enum UserRoles {
  Admin = "admin",
  Editor = "editor",
  Viewer = "viewer",
}

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) return true;
  return false;
};

const isEditPermissible = canEdit(UserRoles.Admin);

//console.log(isEditPermissible);

enum Status {
  Pending = "pending",
  Completed = "completed",
}

const isDone = (status: Status) => {
  return status === Status.Completed
    ? "---------Done---------"
    : "----------working-----------";
};

console.log(isDone(Status.Pending));
