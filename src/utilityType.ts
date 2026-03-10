type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

type ProductSummary = Pick<Product, "id" | "name" | "price">;

type ProductWithoutStock = Omit<Product, "stock" | "color">;

type ProductWithColor = Required<Product>;

const product1: ProductWithColor = {
  id: 222,
  name: "mouse",
  price: "20",
  stock: 100,
  color: "black",
};

type OptionalProduct = Partial<Product>;
type ProductReadOnly = Readonly<Product>;

const emptyObj: Record<string, unknown> = {};

const product2 = {
  id: 222,
  name: "mouse",
  price: "20",
};
