import { ProductList } from '../../types/product';

export type ProductListQuery = {
  products: ProductList;
};

export const PRODUCTS_QUERY = `{
  products {
    totalElements
    content {
      id
      name
      brand      
      assets {
        url
        primary
      }
      minimumPrice {
        amount
        currency
      }
    }
  }
}`;
