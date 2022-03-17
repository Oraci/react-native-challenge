import { Product } from '../../types/product';

export type ProductItemProps = Pick<
  Product,
  'id' | 'name' | 'brand' | 'assets' | 'minimumPrice'
>;
