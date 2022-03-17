import { Product } from '../../types/product';

export type ProductDetailsQuery = {
  product: Product;
};

export const PRODUCT_QUERY = `
  query($id: ID!) {
    product(id: $id) {
      id
      name
      brand
      minimumPrice {
        amount
        currency
      }
      variants {
        id
        quantity
        optionValues {
          size
          color
        }
        price {
          amount
          currency
        }
      }
      assets {
        url
        primary
      }
    }
  }`;
