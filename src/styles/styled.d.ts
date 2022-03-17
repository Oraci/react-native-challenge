import 'styled-components';
import {
  FontSizeTypes,
  MarginTypes,
  PaddingTypes,
} from '../components/TextLabel';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    typography: {
      fontSize: {
        [K in FontSizeTypes]: string;
      };
    };
    space: {
      margin: {
        [K in MarginTypes]: string;
      };
      padding: {
        [K in PaddingTypes]: string;
      };
    };
  }
}
