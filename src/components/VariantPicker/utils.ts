import { ItemType, ValueType } from 'react-native-dropdown-picker';
import { ProductVariant } from '../../types/product';

const compareValues = (a: ItemType, b: ItemType) => {
  const valueA = a.value || '';
  const valueB = b.value || '';

  if (valueA < valueB) {
    return -1;
  }

  if (valueA > valueB) {
    return 1;
  }

  return 0;
};

export const getSizeItems = (items: ProductVariant[]) =>
  items
    .reduce((acc: ItemType[], { optionValues: { size } }: ProductVariant) => {
      if (!size) {
        return [...acc];
      }

      const exists = acc.find((item: ItemType) => item.value === size);

      if (!exists) {
        const isAvailable = items.some(
          ({ optionValues, quantity }: ProductVariant) =>
            optionValues.size === size && quantity > 0,
        );

        const newItem = {
          label: size,
          value: size,
          testID: 'size-picker-option',
          disabled: !isAvailable,
        };

        return [...acc, newItem];
      }

      return [...acc];
    }, [])
    .sort((a: ItemType, b: ItemType) => compareValues(a, b));

export const getColorItems = (items: ProductVariant[], value?: ValueType) =>
  items
    .reduce((acc: ItemType[], { optionValues: { color } }: ProductVariant) => {
      if (!color) {
        return [...acc];
      }

      const exists = acc.find((item: ItemType) => item.value === color);

      if (!exists) {
        const isAvailable = items.some(
          (item: ProductVariant) =>
            item.optionValues.size === value &&
            item.optionValues.color === color &&
            item.quantity > 0,
        );

        const newItem = {
          label: color,
          value: color,
          testID: 'color-picker-option',
          disabled: !isAvailable,
        };

        return [...acc, newItem];
      }

      return [...acc];
    }, [])
    .sort((a: ItemType, b: ItemType) => compareValues(a, b));

export const getVariant = (
  items: ProductVariant[],
  size?: ValueType | null,
  color?: ValueType | null,
) =>
  items.find(
    (item: ProductVariant) =>
      item.optionValues.size === size && item.optionValues.color === color,
  );
