import React from 'react';
import TextLabel from '../../components/TextLabel';
import ProductPrice from '../../components/ProductPrice';
import { ProductDetailsCardProps } from './types';
import { Container } from './styles';

const ProductDetailsCard = ({
  name,
  brand,
  price,
}: ProductDetailsCardProps) => {
  return (
    <Container>
      <TextLabel fontWeight="600" fontSize={26}>
        {name}
      </TextLabel>
      <TextLabel fontSize={20} color="#888">
        {brand}
      </TextLabel>
      <ProductPrice
        fontSize={26}
        amount={price.amount}
        currency={price.currency}
      />
    </Container>
  );
};

export default ProductDetailsCard;
