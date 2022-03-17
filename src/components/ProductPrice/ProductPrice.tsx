import React from 'react';
import TextLabel from '../../components/TextLabel';
import { ProductPriceProps } from './types';
import { PriceContainer } from './styles';

const ProductPrice = ({
  amount,
  currency,
  alignItems,
  fontSize,
}: ProductPriceProps) => {
  return (
    <PriceContainer alignItems={alignItems}>
      <TextLabel
        fontSize={fontSize}
        fontWeight="600">{`${amount} ${currency}`}</TextLabel>
    </PriceContainer>
  );
};

export default ProductPrice;
