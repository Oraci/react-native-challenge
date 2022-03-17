export type ImageAsset = {
  url: string;
  primary: boolean;
};

export type Price = {
  amount: number;
  currency: string;
};

type OptionValues = {
  size?: string;
  color?: string;
};

export type ProductVariant = {
  id: string;
  price: Price;
  quantity: number;
  optionValues: OptionValues;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  minimumPrice: Price;
  uri?: string;
  assets: ImageAsset[];
  variants: ProductVariant[];
};

export type ProductList = {
  content: Product[];
  totalElements: number;
};

export type ProductCart = Partial<Pick<Product, 'name' | 'brand'>> &
  ProductVariant;
