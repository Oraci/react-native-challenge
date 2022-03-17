import { ProductCart } from '../../../types/product';

export type ProductCartModalProps = {
  onBackButton: () => void;
};

export type ProductBag = {
  bagQuantity: number;
  total: number;
} & ProductCart;

export type ShoppingBag = {
  products: ProductBag[];
  total: number;
};
