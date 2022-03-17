import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { PickerProps } from './types';

const Picker = (props: PickerProps) => {
  const {
    items,
    placeholder,
    disabled = false,
    onSelect,
    value,
    setValue,
    testID,
  } = props;

  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      closeAfterSelecting
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      onSelectItem={onSelect}
      placeholder={placeholder}
      disabled={disabled}
      style={{ marginVertical: 5 }}
      listMode="SCROLLVIEW"
      scrollViewProps={{
        nestedScrollEnabled: true,
      }}
      disabledItemLabelStyle={{ opacity: 0.3 }}
      testID={testID}
    />
  );
};

export default Picker;
