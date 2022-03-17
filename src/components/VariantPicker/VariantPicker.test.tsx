import '@testing-library/jest-native/extend-expect';

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { getSizeItems, getColorItems } from './utils';
import VariantPicker from './VariantPicker';

const emptyFunction = () => {};

describe('Testing VariantPicker', () => {
  test('Check availability size items', () => {
    const variantsMock = [
      {
        id: 'ff0be8be01539d01125-1',
        quantity: 0,
        optionValues: {
          size: '40',
          color: 'white',
        },
        price: {
          amount: 50,
          currency: 'EUR',
        },
      },
      {
        id: 'ff0be8be01539d01125-1',
        quantity: 4,
        optionValues: {
          size: '40',
          color: 'black',
        },
        price: {
          amount: 55,
          currency: 'EUR',
        },
      },
    ];

    const result = [
      {
        label: '40',
        value: '40',
        testID: 'size-picker-option',
        disabled: false,
      },
    ];

    const sizeItems = getSizeItems(variantsMock);
    expect(sizeItems).toEqual(result);
  });

  test('Check availability color items', () => {
    const variantsMock = [
      {
        id: 'ff0be8be01539d01125-1',
        quantity: 0,
        optionValues: {
          size: '40',
          color: 'white',
        },
        price: {
          amount: 50,
          currency: 'EUR',
        },
      },
      {
        id: 'ff0be8be01539d01125-1',
        quantity: 4,
        optionValues: {
          size: '40',
          color: 'black',
        },
        price: {
          amount: 55,
          currency: 'EUR',
        },
      },
    ];

    const result = [
      {
        label: 'black',
        value: 'black',
        testID: 'color-picker-option',
        disabled: false,
      },
      {
        label: 'white',
        value: 'white',
        testID: 'color-picker-option',
        disabled: true,
      },
    ];

    const colorItems = getColorItems(variantsMock, '40');
    expect(colorItems).toEqual(result);
  });

  test('Check item size disabled', () => {
    const variantsMock = [
      {
        id: 'ff0be8be01539d01125-1',
        quantity: 0,
        optionValues: {
          size: '42',
          color: 'black',
        },
        price: {
          amount: 55,
          currency: 'EUR',
        },
      },
    ];

    const { getByTestId, getByText } = render(
      <VariantPicker variants={variantsMock} onChangeSelect={emptyFunction} />,
    );

    fireEvent(getByTestId('size-picker'), 'setOpen', true);
    expect(getByText('42')).toHaveStyle({ opacity: 0.3 });
  });

  test('Check color item disabled', () => {
    const variantsMock = [
      {
        id: 'ff0be8be01539d01125-1',
        price: {
          amount: 50,
          currency: 'EUR',
        },
        quantity: 14,
        optionValues: {
          size: '41',
          color: 'blue',
        },
      },
      {
        id: 'ff0be8be01539d01125-1',
        price: {
          amount: 50,
          currency: 'EUR',
        },
        quantity: 23,
        optionValues: {
          size: '46',
          color: 'grey',
        },
      },
    ];

    const { getByTestId, getByText } = render(
      <VariantPicker variants={variantsMock} onChangeSelect={emptyFunction} />,
    );

    fireEvent(getByTestId('size-picker'), 'setOpen', true);

    fireEvent.press(getByText('46'));

    fireEvent(getByTestId('color-picker'), 'setOpen', true);
    expect(getByText('blue')).toHaveStyle({ opacity: 0.3 });
  });

  test('Check quantity options', () => {
    const variantsMock = [
      {
        id: 'ff0be8be01539d01125-1',
        quantity: 0,
        optionValues: {
          size: '40',
          color: 'white',
        },
        price: {
          amount: 50,
          currency: 'EUR',
        },
      },
      {
        id: 'ff0be8be01539d01125-1',
        quantity: 4,
        optionValues: {
          size: '40',
          color: 'black',
        },
        price: {
          amount: 55,
          currency: 'EUR',
        },
      },
    ];

    const { getByTestId, getAllByTestId } = render(
      <VariantPicker variants={variantsMock} onChangeSelect={emptyFunction} />,
    );

    fireEvent(getByTestId('size-picker'), 'setOpen', true);
    const sizeItems = getAllByTestId('size-picker-option');
    expect(sizeItems).toHaveLength(1);

    fireEvent.press(sizeItems[0]);

    fireEvent(getByTestId('color-picker'), 'setOpen', true);
    expect(getAllByTestId('color-picker-option')).toHaveLength(2);
  });
});
