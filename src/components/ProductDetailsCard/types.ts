import { Product, Price } from '../../types/product';

export type ProductDetailsCardProps = Pick<Product, 'name' | 'brand'> & {
  price: Price;
};
