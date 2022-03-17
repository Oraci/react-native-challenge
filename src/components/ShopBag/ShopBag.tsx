import React, { memo } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import TextLabel from '../../components/TextLabel';
import { ShopBagProps } from './types';
import { Container, QtyContainer } from './styles';

const ShopBag = ({ quantity, onPress }: ShopBagProps) => {
  return (
    <Container onPress={onPress}>
      <SimpleLineIcons name="handbag" size={32} />
      {quantity > 0 && (
        <QtyContainer>
          <TextLabel>{quantity}</TextLabel>
        </QtyContainer>
      )}
    </Container>
  );
};

export default memo(ShopBag);
