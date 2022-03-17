import React, { useState, useMemo } from 'react';
import { ItemType, ValueType } from 'react-native-dropdown-picker';
import Picker from '../Picker';
import { getSizeItems, getColorItems, getVariant } from './utils';
import { VariantPickerProps } from './types';
import { Container } from './styles';

const VariantPicker = ({ variants, onChangeSelect }: VariantPickerProps) => {
  const [colorItems, setColorItems] = useState<ItemType[]>([]);
  const [sizeValue, setSizeValue] = useState<ValueType | null>(null);
  const [colorValue, setColorValue] = useState<ValueType | null>(null);

  const sizeItems = useMemo(() => getSizeItems(variants), [variants]);

  const onSelectSize = (item: ItemType) => {
    const { value } = item;

    const colorItems = getColorItems(variants, value);
    setColorItems(colorItems);
    setColorValue(null);
    onChangeSelect();
  };

  const onSelectColor = (item: ItemType) => {
    const { value } = item;

    const variant = getVariant(variants, sizeValue, value);
    onChangeSelect(variant);
  };

  return (
    <Container>
      <Picker
        items={sizeItems}
        value={sizeValue}
        placeholder="Select a Size..."
        setValue={setSizeValue}
        onSelect={onSelectSize}
        testID="size-picker"
      />
      <Picker
        items={colorItems}
        value={colorValue}
        placeholder="Select a Color..."
        setValue={setColorValue}
        onSelect={onSelectColor}
        testID="color-picker"
      />
    </Container>
  );
};

export default VariantPicker;
