import { Platform } from 'react-native';
import {
  FontSizeTypes,
  MarginTypes,
  PaddingTypes,
} from '../components/TextLabel';

export const getMargin =
  (size: MarginTypes) =>
  <P extends Record<string, any>>(props: P) =>
    props.theme.space.margin[size];

export const getPadding =
  (size: PaddingTypes) =>
  <P extends Record<string, any>>(props: P) =>
    props.theme.space.padding[size];

export const getFontSize =
  (size: FontSizeTypes) =>
  <P extends Record<string, any>>(props: P) =>
    props.theme.typography.fontSize[size];

export const setBoxShadow = (boxShadow: string, elevation: number) => {
  return Platform.select({
    ios: `
          box-shadow: ${boxShadow};
        `,
    android: `
          elevation: ${elevation};
        `,
  });
};
