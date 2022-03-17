import styled from 'styled-components/native';
import { ProductPriceProps } from './types';

export const PriceContainer = styled.View<
  Pick<ProductPriceProps, 'alignItems'>
>`
  align-items: ${({ alignItems }) => alignItems || 'flex-end'};
`;
