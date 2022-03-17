import { TextStyle } from 'react-native';
import { Price } from '../../types/product';
import { TextLabelProps } from '../../components/TextLabel';

export type ProductPriceProps = {
  alignItems?: TextStyle['alignItems'];
} & Price &
  Pick<TextLabelProps, 'fontSize'>;
