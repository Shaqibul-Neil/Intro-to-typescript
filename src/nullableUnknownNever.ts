//nullable type
const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB : ${input}`);
  } else console.log("From DB : All user");
};
//getUser(null);

//unknown type
const discountCalc = (input: unknown) => {
  if (typeof input === "number") {
    console.log(input * 0.1);
  } else if (typeof input === "string") {
    console.log("str", parseInt(input) * 0.2);
  } else console.log(input);
};

discountCalc(100);
discountCalc("100 TK");
discountCalc(null);

//void
const throwError = (msg: string): never => {
  console.log(msg);
  throw new Error(msg);
};
//throwError("error");
