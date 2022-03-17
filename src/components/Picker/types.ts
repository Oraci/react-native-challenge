import { SetStateAction, Dispatch } from 'react';
import { ItemType, ValueType } from 'react-native-dropdown-picker';

export type PickerProps = {
  items: ItemType[];
  placeholder?: string;
  disabled?: boolean;
  onSelect: (item: ItemType) => void;
  setValue: Dispatch<SetStateAction<ValueType | null>>;
  value: ValueType | null;
  testID?: string;
};
