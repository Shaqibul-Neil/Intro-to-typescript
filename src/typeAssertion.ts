let anything: any;
anything = "25";
anything as string;

const kgToGmConverter = (
  input: string | number | undefined,
): string | number | undefined => {
  if (typeof input === "number") return input * 1000;
  else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `${Number(value) * 1000}`;
  }
};

const result1 = kgToGmConverter(2) as number;

const result2 = kgToGmConverter("29 kg") as string;

console.log({ result1, result2 });

type CustomError = {
  message: string;
};
try {
} catch (error) {
  console.log((error as CustomError).message);
}
