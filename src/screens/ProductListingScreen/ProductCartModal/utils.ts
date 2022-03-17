import { ProductCart } from '../../../types/product';
import { ShoppingBag, ProductBag } from './types';

export const getProducts = (cart: ProductCart[]) =>
  cart.reduce(
    (acc: ShoppingBag, item: ProductCart) => {
      const index = acc.products.findIndex(
        (accItem: ProductBag) =>
          accItem.id === item.id &&
          accItem.optionValues.size === item.optionValues.size,
      );

      if (index > -1) {
        const newAcc = [...acc.products];
        const newBagQuantity = newAcc[index].bagQuantity + 1;

        const newItem = {
          ...newAcc[index],
          bagQuantity: newBagQuantity,
          total: newBagQuantity * newAcc[index].price.amount,
        };

        newAcc.splice(index, 1, newItem);
        const newTotal = acc.total + newItem.price.amount;

        return { ...acc, products: [...newAcc], total: newTotal };
      } else {
        const newItem = {
          ...item,
          bagQuantity: 1,
          total: item.price.amount,
        };

        const newTotal = acc.total + newItem.total;

        return {
          ...acc,
          products: [...acc.products, { ...newItem }],
          total: newTotal,
        };
      }
    },
    { products: [], total: 0 },
  );
