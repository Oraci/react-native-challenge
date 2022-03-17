import { TextStyle } from 'react-native';

export type FontSizeTypes = 14 | 16 | 20 | 24 | 26 | 32;
export type MarginTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type PaddingTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type TextLabelProps = {
  fontSize?: FontSizeTypes;
  color?: string;
  marginRight?: MarginTypes;
  marginBottom?: MarginTypes;
  textAlign?: TextStyle['textAlign'];
  fontWeight?: TextStyle['fontWeight'];
};
