import { ProductVariant } from '../../types/product';

export type VariantPickerProps = {
  variants: ProductVariant[];
  onChangeSelect: (selectedVariant?: ProductVariant) => void;
};
