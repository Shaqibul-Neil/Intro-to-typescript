type A = null;
type B = undefined;

//type C = A extends null ? false;
type C = A extends number ? true : B extends undefined ? true : false;

//using generic
type RichPplVehicle = {
  bike: string;
  car: string;
  ship: string;
};

//type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
type CheckVehicle<T> = T extends keyof RichPplVehicle ? true : false;

type HasBike = CheckVehicle<"bike">;
type HasTractor = CheckVehicle<"tractor">;
