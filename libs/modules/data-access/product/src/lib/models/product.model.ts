export type Product = {
  createdAt: string;
  name: string;
  price: string;
  description: string;
  image: string;
  id: string;
  quantity: number;
};

// Exemplo de praticidade de utilizar o type ao invés da interface em alguns casos
// type ProductWithoutId = Omit<Product, 'id'>;
